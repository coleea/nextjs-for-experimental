# check these out

- [✅] Routes Groups
- [🚫] Parallel Routes
    - Parallel routes are created using named slots
    - https://nextjs.org/docs/app/building-your-application/routing/parallel-routes

- [✅] Catch-all Segments
    - https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments
    - [✅] optional catch-all segments

- next.js의 suspense는 cache됨
    - 캐쉬되면 이후부터는 suspense 무시하고 캐시된 컴포넌트 바로 보내줌
    - fallback이 표시되지 않는것이 증거

- Passing Server Components to Client Components as Props
    https://nextjs.org/docs/getting-started/react-essentials#recommended-pattern-passing-server-components-to-client-components-as-props

---


official docs

- Routing (the core of next.js)
    - [❗] Middleware
    - Parallel Routes
    - Internationalization
    - Intercepting Routes
    - Defining Routes
    - Pages and Layouts
    - Linking and Navigating
    - Routes Groups
    - Dynamic Routes
    - Loading UI and Streaming
    - Error Handling
    - Route Handlers

- hooks
    - useParams
    - usePathname
    - useRouter
    - useSearchParams
    - useSelectedLayoutSegment
    - useSelectedLayoutSegments
    - useReportWebVitals

- Functions
    - cookies
    - draftMode
    - fetch
    - generateMetadata
    - generateStaticParams
    - headers
    - imageResponse
    - NextRequest
    - NextResponse
    - notFound
    - redirect
    - revalidatePath
    - revalidateTag

- API Reference
    - File Conventions
    - default.js
    - error.js
    - layout.js
    - loading.js
    - not-found.js
    - page.js
    - route.js
    - Route Segment Config
    - template.js
    - metadata
        - favicon.ico, apple-icon.jpg, and icon.jpg
        - opengraph-image.js and twitter-image.js
        - robots.txt
        - sitemap.xml

- Rendering
    - Static and Dynamic
    - Edge and Node.js Runtimes
        - export const runtime = 'edge'; 
        - export const runtime = 'nodejs'; 
        - export const runtime = 'experimental-edge'; 
        - // https://github.com/vercel/next.js/issues/39800

- Data Fetching
    - Fetching
    - Caching
    - Revalidating
    - Server Actions

- Optimizing
    - Images
    - Fonts
    - Scripts
    - Metadata
    - Static Assets
    - Lazy Loading
    - Analytics
    - OpenTelemetry
    - Instrumentation

- Components
    - Font
    - Image
    - Link
    - Script



- next.config.js Options
    - appDir
    - assetPrefix
    - basePath
    - compress
    - devIndicators
    - distDir
    - env
    - eslint
    - exportPathMap
    - generateBuildId
    - generateEtags
    - headers
    - httpAgentOptions
    - images
    - mdxRs
    - onDemandEntries
    - output
    - pageExtensions
    - poweredByHeader
    - productionBrowserSourceMaps
    - reactStrictMode
    - redirects
    - rewrites
    - Runtime Config
    - serverComponentsExternalPackages
    - trailingSlash
    - transpilePackages
    - turbo
    - typedRoutes
    - typescript
    - urlImports
    - webpack
    - webVitalsAttribution
---

# version history

## Next.js 13.4
Friday, May 5th 2023 (5 days ago)

Next.js 13.4 is a foundational release, marking stability for the App Router:

App Router (Stable)
Turbopack (Beta
Server Actions (Alpha

## Next.js 13.3
Friday, April 7th 2023 (about 1 month ago)

Next.js 13.3 adds popular community-requested features and is the last release before the App Router is stable, including:

File-Based Metadata API
Dynamic Open Graph Images
Static Export for App Router
Parallel Routes and Interception

## Next.js 13.2
Friday, February 24th 2023 (3 months ago)

Next.js 13.2 includes major improvements to the App Router (app) in preparation for stability:

Built-in SEO Support
Route Handlers
MDX for Server Components
Rust MDX Parser
Improved Error Overlay
Statically Typed Links (Beta)
Turbopack Improvements (Alpha)
Next.js Cache (Beta)

## Next.js 13.1
Friday, December 23rd 2022 (5 months ago)

Next.js 13.1 includes improvements to both the pages and app directories:

app Directory (Beta) Improvements
Built-in Module Transpilation
Edge Runtime (Stable)
Turbopack Updates
Middleware Improvements
SWC Import Resolution

## Next.js 13
Wednesday, October 26th 2022 (7 months ago)

As we announced at Next.js Conf, Next.js 13 (stable) lays the foundations to be dynamic without limits:

- app/ Directory (beta)
- Layouts
- React Server Components
- Streaming
- Turbopack (alpha)
- New next/image (stable)
- New @next/font (beta)
- Improved next/link

## 12.3

Friday, September 9th 2022

- Improved Fast Refresh: .env, jsconfig.json, and tsconfig.json files now hot reload.
- TypeScript Auto-Install: Add a .ts file to automatically configure TypeScript and install deps.
- Image Component: next/future/image is now stable.
- SWC Minifier: Minification with the Next.js compiler is now stable.
- New Router + Layouts Update: Implementation has begun and new features explained.

## 12.2

- Middleware (Stable): Dynamic routing for your entire application.
- On-Demand ISR (Stable): Update content without redeploying.
- Edge API Routes (Experimental): High performance API endpoints.
- Edge SSR (Experimental): Server-render your app, at the Edge.
- SWC Plugins (Experimental): Extend compilation with your own plugins.
- Improvements to next/image: Including a new next/future/image component.

## 12.1

2022.02.18

- On-demand ISR (Beta): Revalidate pages using getStaticProps instantly.
- Expanded Support for SWC: styled-components, Relay, and more.
- next/jest Plugin: Zero-configuration Jest support using SWC.
- Faster Minification with SWC (RC): 7x faster minification than Terser.
- Self-Hosting Improvements: ~80% smaller Docker images.
- React 18 & Server Components (Alpha): Improved stability and support.
- Developer Survey: Help us improve Next.js with your feedback.

## 12.0 

- Rust Compiler: ~3x faster Fast Refresh and ~5x faster builds
- Middleware (beta): Enabling full flexibility in Next.js with code over configuration
- React 18 Support: Native Next.js APIs are now supported, as well as Suspense
- <Image /> AVIF Support: Opt-in for 20% smaller images
- Bot-aware ISR Fallback: Optimized SEO for web crawlers
- Native ES Modules Support: Aligning with the standardized module system
- URL Imports (alpha): Import packages from any URL, no installs required
- React Server Components (alpha): Try it today, including SSR streaming

## 11.1

- Security Patch: An important update to prevent potential open redirects.
- ES Modules Support: Enable today with an experimental flag.
- Rust-based Tooling: SWC integration to replace JS tooling (Babel and Terser).
- Faster Data Fetching: 2x faster data fetching with HTTP keep-alive when pre-rendering.
- Faster Source Maps: 70% faster builds and 67% less memory usage when using source maps.
- ESLint Integration Improvements: More accessible defaults and linting for typos.
- next/image Improvements: Optional Sharp usage, better support for next export.

## 11.0

- Conformance: A system that provides carefully crafted solutions to support optimal UX.
- Improved Performance: Further optimizations to improve cold startup time so you can start coding faster.
- next/script: Automatically prioritize loading of third-party scripts to improve performance.
- next/image: Reduce layout shift and create a smoother visual experience with automatic size detection and support for blur-up placeholders.
- Webpack 5: Now enabled by default for all Next.js applications, bringing these benefits to all Next.js developers.
- Create React App Migration (Experimental): Automatically convert Create React App to be Next.js compatible.
- Next.js Live (Preview Release): Code in the browser, with your team, in real time.

## 10.2

- Faster Builds: Up to ~60% faster subsequent builds with caching.
- Faster Refresh: 100ms to 200ms faster refresh.
- Faster Startup: Up to ~24% faster next dev.
- Improved Accessibility: Route changes are now announced by screen readers.
- More Flexible Redirects and Rewrites: Match any header, cookie, or query string.
- Automatic Webfont Optimization: Improved performance by inlining font CSS.

## 10.1

- 3x Faster Refresh: 200ms faster refresh with no changes necessary.
- Improved Installation Time: 58% smaller install size and 56% fewer dependencies.
- next/image Improvements: Apple Silicon (M1) Support, plus more layout and loader options.
- Next.js Commerce Shopify Integration: Flexible data layer for composable e-commerce apps.
- Custom 500 Page: Add your own logo and branding to error pages.
- Strict PostCSS Configuration Loading: Improved caching with Webpack 5.
- Support for extends in tsconfig.json: Extensible configuration for large TypeScript apps.
- Detect When Preview Mode Is Enabled: Conditionally show content when viewing previews.
- Router Methods Scroll to Top: Automatically scroll to the top, now consistent for all routing.
- Documentation Improvements: Incremental adoption, migration, and Docker deployment.

## 10.0

- Built-in Image Component and Automatic Image Optimization: Automatically optimize images using the new next/image component
- Internationalized Routing: Start internationalizing your Next.js applications with built-in primitives
- Next.js Analytics: Measure and act on real user performance
- Next.js Commerce: An all-in-one starter kit for high-performance e-commerce sites
- React 17 Support: The latest React release is fully compatible with Next.js
- getStaticProps / getServerSideProps Fast Refresh: Automatic reloading of properties when editing data fetching methods
- Fast Refresh for MDX: When using @next/mdx, Fast Refresh is now leveraged to apply changes without full page reloads
- Importing CSS from Third Party React Components: Importing CSS needed for components from npm is now supported
- Automatic Resolving of href: The as property is no longer needed on next/link
- @next/codemod CLI: Allows for easier access to all Next.js codemods
- Blocking Fallback for getStaticPaths: Wait on pre-rendering when generating new static pages instead of serving a static fallback page

## 9.5

- Stable Incremental Static Regeneration: re-build static pages after you've deployed, in milliseconds
- Customizable Base Path: easily host Next.js projects on subpaths of your domain
- Support for Rewrites, Redirects, and Headers: rewrite vanity URLs, redirect old URLs, and add headers to static pages
- Optional Trailing Slash in URLs: consistently enforce the absence or presence of a trailing slash
- Persistent Caching for Page Bundles: unchanged pages' JavaScript files now carry forward across builds
- Fast Refresh Enhancements: improved reliablility of the Next.js live-editing experience
- Production React Profiling: a new flag to measure your project's “cost” of rendering
- Optional Catch All Routes: dynamic routes now provide more flexibility for SEO-driven use-cases
- Webpack 5 Support (beta): optionally opt-into the next version of webpack 5 for improved build size and speed

## 9.4

- Fast Refresh: fast and reliable live-editing experience, as proven at Facebook scale
- Incremental Static Regeneration (beta): re-build static pages after you've deployed, in milliseconds
- CMS Examples: examples for Contentful, DatoCMS, Prismic, Sanity, and TakeShape using our new next-gen static site generation
- New Environment Variables Support: built-in support for .env and a NEXT_PUBLIC_ prefix, as seen in CRA
- Improved Built-in Fetch Support: ditch your node-fetch and isomorphic-fetch imports in favor of a built-in fetch polyfill, for Node.js and all browsers (build and runtime)
- Integrated Web Vitals Reporting: capture the metrics that drive Lighthouse scores, but from your real traffic
- Absolute Imports and Aliases: clearer and shorter imports, avoiding ../../../ spaghetti
- Configurable Sass Support: configure includePaths and other options of our built-in Sass support
- Improved Log Output: console output that's easier to read, consistently formatted, and less repetitive

## 9.3

- Next-gen Static Site Generation (SSG) Support: Built-in optimized static generation through new data fetching methods.
- Preview Mode: Bypass statically generated pages to display drafts from a CMS.
- Built-In Sass Support for Global Stylesheets: Applications can now directly import .scss files as global stylesheets.
- Built-In Sass CSS Module Support for Component-Level Styles: Leveraging the .module.scss convention, locally scoped CSS can be imported and used anywhere in your application.
- Automatic Static Optimization for 404: Improved speed and reliability by serving the 404 page statically.
- 32 kB Smaller Runtime: Smaller runtime size for all Next.js applications through powerful optimizations.
- Next.js Community on GitHub Discussions: You can now discuss and ask questions right from the Next.js repository on GitHub.

## 9.2

- Built-In CSS Support for Global Stylesheets: Applications can now directly import .css files as global stylesheets.
- Built-In CSS Module Support for Component-Level Styles: Leveraging the .module.css convention, locally scoped CSS can be imported and used anywhere in your application.
- Improved Code-Splitting Strategy: The Google Chrome team heavily optimized Next.js' code-splitting strategy, resulting in significantly smaller client-side bundles. Furthermore, they've maximized HTTP/2 utilization to improve page load speed without hurting HTTP/1.1 performance.
- Catch-All Dynamic Routes: Next.js' Dynamic Routes now support catch-all routes, supporting a variety of new use-cases, e.g. CMS-powered websites.

## 9.1.7

- 3% – 8%+ Smaller Client-Side JavaScript Size: We've optimized application output even futher, shaving 7.5kB off hello world applications. More complex applications will show a savings up to 8% or more.
- Redesigned Production Build CLI Output: The production build output now shows gzipped file sizes in an easier to understand format.
- New Built-In Polyfills: fetch(), URL, and Object.assign: Applications can leverage the fetch() API, URL, and Object.assign in legacy browsers without compatibility concerns.
- Optimized Page Loading: Better FCP and TTI: We've collaborated closely with the Google Chrome team to maximize page loading performance. This results in a much better end-user experience.
- Support for the Latest JavaScript Features: We're committed to ensuring you can always use the latest JavaScript features, including Optional Chaining, Nullish Coalescing, and other stable ES2020 features.
- Zero-Config Deployment Support for next export Applications: next export powered applications can now be deployed to Vercel with zero configuration.
- React Strict Mode Compliance and Opt-In: All of Next.js' client-side runtime is now compatible with React's Strict Mode. We've also added a configuration option to enable this mode for your whole application.
- Automated Testing against Nightly React Builds: Next.js is automatically tested against React's next channel, ensuring compatibility with future releases.

## 9.1

- src Directory Support: The pages directory can now be nested under the src folder, supporting a wider variety of application setups.
- public Directory Support: Define files to be mounted at the root of your application's URL (e.g. favicon.ico).
- Built-in CSS Support: Applications can soon import Global CSS and leverage development hot reloading and advanced production optimizations, compilation, and polyfilling.
- Static Error Pages: Statically export expected error pages (like 404) for better availability (CDN).
- Module / Nomodule: Ship smaller JavaScript bundles to end-users running on evergreen browsers.
- Improved Bundle Splitting: Ship fewer bytes to your end-user, improving TTI and page transition speed. Large library chunks are also long-term cached across deploys.

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
