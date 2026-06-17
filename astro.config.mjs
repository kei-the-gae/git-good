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
                {
                    tag: "script",
                    content: `
                            document.addEventListener('DOMContentLoaded', () => {
                              document.querySelectorAll('a[href^="http"]').forEach(link => {
                                link.setAttribute('target', '_blank');
                                link.setAttribute('rel', 'noopener noreferrer');
                              });
                            });
                          `,
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
                {
                    label: "Why Version Control?",
                    link: "/why-version-control/",
                },
                { label: "Core Concepts", link: "/core-concepts/" },
                { label: "Getting Started", link: "/getting-started/" },
                { label: "Command Line Primer", link: "/command-line-primer/" },
                { label: "The Basic Workflow", link: "/basic-workflow/" },
                { label: "Common Mistakes & Fixes", link: "/common-mistakes/" },
                { label: "Glossary", link: "/glossary/" },
            ],
        }),
    ],
});
