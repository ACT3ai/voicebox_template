import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// Runs in Node.js. No browser APIs or JSX here.
//
// CUSTOMIZE: every citizen who copies this template edits the values in this
// block (or sets the env vars at build time) and nothing else in this file.
const siteUrl = process.env.DOCUSAURUS_URL ?? "https://example.com";
const baseUrl = process.env.DOCUSAURUS_BASE_URL ?? "/";
const ownerName = "Your Name";
const siteTitle = `${ownerName}'s VoiceBox`;
const siteTagline = "We the Citizen's VoiceBox";
const githubOrg = "your-github-user";
const githubRepo = "your-voicebox";

const config: Config = {
  title: siteTitle,
  tagline: siteTagline,
  favicon: "img/favicon.svg",

  future: {
    v4: true,
  },

  url: siteUrl,
  baseUrl,
  trailingSlash: false,

  organizationName: githubOrg,
  projectName: githubRepo,

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: siteTitle,
      logo: {
        alt: "VoiceBox",
        src: "img/logo.svg",
      },
      items: [
        { type: "docSidebar", sidebarId: "voiceboxSidebar", position: "left", label: "VoiceBox" },
      ],
    },
    footer: {
      style: "dark",
      copyright: `${siteTitle} · a We the Citizen's VoiceBox · Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
