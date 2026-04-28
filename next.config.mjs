/** @type {import('next').NextConfig} */
const isGithubActions = Boolean(process.env.GITHUB_ACTIONS);
const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserOrOrgPagesRepo = repositoryName.endsWith(".github.io");
const basePath = isGithubActions && repositoryName && !isUserOrOrgPagesRepo
  ? `/${repositoryName}`
  : "";

const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
