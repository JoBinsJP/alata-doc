export const appName = 'Alata';
export const frameworkVersion = '0.12.0.2';
export const docsRoute = '/docs';
export const docsImageRoute = '/og/docs';
export const docsContentRoute = '/llms.mdx/docs';

export const gitConfig = {
  user: 'JoBinsJP',
  repo: 'alata-core',
  branch: 'main',
};

export const docsGitConfig = { ...gitConfig, repo: 'alata-doc' };
export const releaseUrl = `https://github.com/${gitConfig.user}/${gitConfig.repo}/releases/tag/v${frameworkVersion}`;
