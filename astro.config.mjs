// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "Git Good",
            favicon: undefined,
            head: [
                {
                    tag: "link",
                    attrs: {
                        rel: "icon",
                        href: "/favicon-dark.svg",
                        media: "(prefers-color-scheme: light)",
                    },
                },
                {
                    tag: "link",
                    attrs: {
                        rel: "icon",
                        href: "/favicon-light.svg",
                        media: "(prefers-color-scheme: dark)",
                    },
                },
            ],
            social: [
                {
                    icon: "github",
                    label: "GitHub",
                    href: "https://github.com/kei-the-gae/git-good",
                },
            ],
            sidebar: [
                { label: "Home", link: "/" },
                { label: "Why Version Control?", link: "/why-version-control" },
                { label: "Core Concepts", link: "/core-concepts" },
                { label: "Getting Started", link: "/getting-started" },
                { label: "The Basic Workflow", link: "/basic-workflow" },
                { label: "Common Mistakes & Fixes", link: "/common-mistakes" },
                { label: "Glossary", link: "/glossary" },
            ],
        }),
    ],
});
