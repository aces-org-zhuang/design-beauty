import { defineConfig } from 'likec4';

export default defineConfig({
  projects: {
    // 聚合视图：跨项目全景
    aces: {
      sources: [
        'src/specification.c4',
        'src/systems/**/*.c4',
        'src/views/**/*.c4',
        'src/deployment/**/*.c4',
        'projects/**/src/**/*.c4',
      ],
    },
  },
});
