// @ts-check
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextraPromise = import("nextra").then(({ default: nextra }) =>
  nextra({
    theme: "nextra-theme-blog",
    themeConfig: "./theme.config.tsx",
    search: {
      codeblocks: true,
    },
    defaultShowCopyCode: true,
    // readingTime: true,
  })
);

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        "@": __dirname,
      },
    };
    return config;
  },
  output: 'export',
  images: {
    unoptimized: true
  }
};

export default async function () {
  const withNextra = await nextraPromise;
  return withNextra(nextConfig);
}
