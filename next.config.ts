import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "upload.wikimedia.org", // For RUPP logo
            },
            {
                protocol: "https",
                hostname: "tfdevs.com", // For TFDev logos
            },
            {
                protocol: "https",
                hostname: "png.pngtree.com", // For school building illustration
            },
            {
                protocol: "https",
                hostname: "www.today.com.kh", // For TODAY Internet logo
            },
            {
                protocol: "https",
                hostname: "encrypted-tbn0.gstatic.com", // For Freelancer image
            },
            {
                protocol: "https",
                hostname: "www.w3.org",
            },
            {
                protocol: "https",
                hostname: "scontent.fpnh11-2.fna.fbcdn.net",
            },
            {
                protocol: "https",
                hostname: "nodejs.org",
            },
            {
                protocol: "https",
                hostname: "www.postgresql.org", // Added this hostname
            },
            {
                protocol: "https",
                hostname: "pipedream.com", // Added this hostname
            },
            {
                protocol: "https",
                hostname: "pbs.twimg.com", // Added this hostname
            },
            {
                protocol: "https",
                hostname: "cdn.prod.website-files.com", // Hostname for the Supabase logo
                pathname: "/655b60964be1a1b36c746790/**", // Match the specific path
            },
            {
                protocol: "https",
                hostname: "www.manektech.com", // ManekTech image hostname
                pathname: "/storage/developer/**", // Match the specific path for ManekTech
            },
            {
                protocol: "https",
                hostname: "www.myqnap.org", // MyQNAP image hostname
                pathname: "/wp-content/uploads/**", // Match the specific path for MyQNAP
            },
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com", // GitHub avatars hostname
                pathname: "/u/**", // Match the specific path for GitHub avatars
            },
            {
                protocol: "https",
                hostname: "jeancochrane.com",
                pathname:
                    "/static/images/blog/netlify-identity-dealbreakers/**",
            },
            {
                protocol: "https",
                hostname: "www.svgrepo.com",
                pathname: "/show/**",
            },
        ],
    },
};

export default nextConfig;
