// 启动 LikeC4 开发服务器。
//
// 为什么需要这个包装脚本：
// likec4 1.58.0 会自动探测环境里的 AI provider 变量
// （ANTHROPIC_API_KEY / OPENROUTER_API_KEY / GEMINI_API_KEY 等），
// 命中后就尝试动态安装 @tanstack/ai-* 扩展包。安装失败会让整个
// serve 进程退出，表现为「模型没问题但服务起不来」。
//
// 这里在启动前清掉这些变量，让服务只做纯粹的架构图渲染。
// 已实测：不清变量时 serve 以 ERROR 退出；清掉后正常监听。

import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const AI_ENV_KEYS = [
  'ANTHROPIC_API_KEY',
  'ANTHROPIC_BASE_URL',
  'ANTHROPIC_MODEL',
  'OPENROUTER_API_KEY',
  'GEMINI_API_KEY',
  'GROQ_API_KEY',
  'MISTRAL_API_KEY',
  'COHERE_API_KEY',
  'LONGCAT_API_KEY',
  'LONGCAT_BASE_URL',
  'SILICONFLOW_API_KEY',
  'CODEBUDDY_API_KEY_HELPER_DISABLED',
];

const env = { ...process.env };
for (const key of AI_ENV_KEYS) {
  delete env[key];
}

const port = process.env.LIKEC4_PORT ?? '3000';
const here = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(here, '..');
const bin = join(projectRoot, 'node_modules', 'likec4', 'bin', 'likec4.mjs');

if (!existsSync(bin)) {
  console.error(`找不到 ${bin}\n请先执行 npm install`);
  process.exit(1);
}

// 切到项目目录，保证 serve 读取正确的 workspace
process.chdir(projectRoot);

const child = spawn(process.execPath, [bin, 'serve', '--port', port], {
  env,
  stdio: 'inherit',
});

child.on('exit', (code) => process.exit(code ?? 0));

for (const sig of ['SIGINT', 'SIGTERM']) {
  process.on(sig, () => child.kill(sig));
}
