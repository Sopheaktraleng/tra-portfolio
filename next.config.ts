import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "standalone",
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            { protocol: "https", hostname: "upload.wikimedia.org" },
            {
                protocol: "https",
                hostname: "mgdkganjyiweabxtetiv.supabase.co",
                pathname: "/storage/v1/object/**",
            },
            { protocol: "https", hostname: "tfdevs.com" },
            { protocol: "https", hostname: "png.pngtree.com" },
            { protocol: "https", hostname: "www.today.com.kh" },
            { protocol: "https", hostname: "encrypted-tbn0.gstatic.com" },
            { protocol: "https", hostname: "www.w3.org" },
            { protocol: "https", hostname: "scontent.fpnh11-2.fna.fbcdn.net" },
            { protocol: "https", hostname: "nodejs.org" },
            { protocol: "https", hostname: "www.postgresql.org" },
            { protocol: "https", hostname: "pipedream.com" },
            { protocol: "https", hostname: "pbs.twimg.com" },
            { protocol: "https", hostname: "miro.medium.com" },
            { protocol: "https", hostname: "raw.githubusercontent.com" },
            { protocol: "https", hostname: "www.vectorlogo.zone" },
            { protocol: "https", hostname: "avatars.githubusercontent.com" },
            {
                protocol: "https",
                hostname: "cdn.prod.website-files.com",
                pathname: "/655b60964be1a1b36c746790/**",
            },
            {
                protocol: "https",
                hostname: "www.manektech.com",
                pathname: "/storage/developer/**",
            },
            {
                protocol: "https",
                hostname: "www.myqnap.org",
                pathname: "/wp-content/uploads/**",
            },
            {
                protocol: "https",
                hostname: "jeancochrane.com",
                pathname: "/static/images/blog/netlify-identity-dealbreakers/**",
            },
            {
                protocol: "https",
                hostname: "www.svgrepo.com",
                pathname: "/show/**",
            },
            {
                protocol: "https",
                hostname: "www.sorint.com",
                pathname: "/wp-content/uploads/**",
            },
            {
                protocol: "https",
                hostname: "www.jenkins.io",
                pathname: "/images/logos/jenkins/**",
            },
            {
                protocol: "https",
                hostname: "nuxt.com",
                pathname: "/assets/design-kit/**",
            },
            {
                protocol: "https",
                hostname: "assets.streamlinehq.com",
                pathname: "/image/private/**",
            },
        ],
    },
};

export default nextConfig;
