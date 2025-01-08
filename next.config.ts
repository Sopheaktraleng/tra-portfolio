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
        ],
    },
};

export default nextConfig;
