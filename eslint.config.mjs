import next from 'eslint-config-next';
import coreWebVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  ...next,
  ...coreWebVitals,
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**', 'reference/**'],
  },
];

export default eslintConfig;
