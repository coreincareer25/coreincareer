
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'placehold.co',
        }
    ],
  },
  // This is required to make the metadata work correctly with client components
  // that need to exist in the same file.
  // In a real app, you'd likely want to refactor the components to avoid this.
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
