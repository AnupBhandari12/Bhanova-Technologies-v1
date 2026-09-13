/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/bhanova", destination: "/smartlink/bhanova", permanent: true },
      { source: "/bhanova.html", destination: "/smartlink/bhanova", permanent: true },
    ];
  },
};

export default nextConfig;
