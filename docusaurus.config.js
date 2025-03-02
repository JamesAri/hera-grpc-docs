// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Hera-GRPC",
	tagline: "Hera on gRPC",
	favicon: "img/favicon.ico",

	// Set the production url of your site here
	url: 'https://JamesAri.github.io',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: "/hera-grpc/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: "JamesAri", // Usually your GitHub org/user name.
	projectName: "hera-grpc-docs", // Usually your repo name.
	trailingSlash: false,

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	// Even if you don't use internationalization, you can use this field to set
	// useful metadata like html lang. For example, if your site is Chinese, you
	// may want to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: "en",
		locales: ["en"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: '/',
					sidebarPath: "./sidebars.js",
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
				},
				blog: false,
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: "img/hera-card.png",
			announcementBar: {
				id: "experimental",
				content: "This is an experimental feature. Please file an issue if you encounter any problems.",
				backgroundColor: "#fafbfc",
				textColor: "#091E42",
				isCloseable: false,
			},
			navbar: {
				title: "Hera-GRPC",
				logo: {
					alt: "Hera grpc logo",
					src: "img/hera-logo.svg",
					width: 36,
					height: 36,
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "tutorialSidebar",
						position: "left",
						label: "Usage",
					},
					// { to: "/api", label: "Api", position: "left" },
					{
						href: "https://github.com/JamesAri/hera-grpc",
						label: "GitHub",
						position: "right",
					},
				],
			},
			docs: {
				versionPersistence: 'localStorage',
				sidebar: {
				  hideable: true,
				  autoCollapseCategories: false,
				},
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Intro",
								to: "/intro",
							},
						],
					},
					{
						title: "Contact",
						items: [
							{
								html: `<strong><a href="mailto:jakub.slechta@emplifi.io">Email</a></strong>`,
							},
							{
								html: `<strong><a href="https://emplifi.enterprise.slack.com/archives/D03NC0MCP2M">Slack</a></strong>`,
							},

						],
					},
					{
						title: "Source code",
						items: [
							{
								label: "GitHub",
								href: "https://github.com/JamesAri/hera-grpc",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
		}),
};

export default config;
