# Hennepin Technical College's Blog!

[blog.hennepintech.edu](https://blog.hennepintech.edu)

## Background

This blog is built using [Jamstack](https://jamstack.org) technologies as a proof-of-concept for HTC to consider what technologies to migrate all web products to. The other primary motivation of the blog is to increase SEO performance for the organization and provide a publishing platfrom for SEO marketing type content. The  primary technologies used to build this blog are [Svelte.js](https://svelte.dev), [SvelteKit](https://kit.svelte.dev), and [Sanity.io](https://sanity.io). All of these projects are open source and are documented very well - but if you find yourself needing assistance, they also have large communities of users who are happy to help. The blog is automatically deployed to [Netlify](https://netlify.com) from the `origin/main` branch of this repository. 

- [Svelte Discord Community](https://discord.gg/svelte)
- [Sanity Slack Community](https://slack.sanity.io)

This blog also makes use of HTC's Svelte component library found [here](https://github.com/hennepin-tech/htc-svelte).

## Getting Started

To contribute to this blog, first clone the repository to your local machine, and install dependencies.

```shell
git clone https://github.com/hennepin-tech/blog.git
cd blog
npm install # || yarn || pnpm install
```

## Development

To run the local dev server and open it in your default browser, run this command in the root of the project.

```shell
npm run dev -- --open
```

## Deployment

Again, this site is setup to deploy automatically to Netlify when `origin/main` receives a commit or merge.
