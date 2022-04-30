import path from 'path';

const config = {
  webpack: {
    alias: {
      '@mui/styled-engine': path.resolve(__dirname, './node_modules/@mui/styled-engine-sc'),

      '@assets': path.resolve(__dirname, 'src/assets'),
      '@styles': path.resolve(__dirname, 'src/assets/styles'),

      '@common': path.resolve(__dirname, 'src/components/common'),
      '@images': path.resolve(__dirname, 'src/components/images'),
      '@layouts': path.resolve(__dirname, 'src/components/layouts'),
      '@shared': path.resolve(__dirname, 'src/components/shared'),

      '@pages': path.resolve(__dirname, 'src/pages'),

      '@configs': path.resolve(__dirname, 'src/configs'),

      '@contexts': path.resolve(__dirname, 'src/contexts'),

      '@hooks': path.resolve(__dirname, 'src/hooks'),

      '@store': path.resolve(__dirname, 'src/store'),

      '@theme': path.resolve(__dirname, 'src/theme'),

      '@appTypes': path.resolve(__dirname, 'src/types'),

      '@utils': path.resolve(__dirname, 'src/utils'),

      '@validations': path.resolve(__dirname, 'src/validations'),
    },
  },
};

export default config;
