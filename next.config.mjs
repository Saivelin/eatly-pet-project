/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "optim.tildacdn.com"
            }
        ]
    }
};

export default nextConfig;
