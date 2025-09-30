import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	compiler: {
		removeConsole: process.env.NODE_ENV === "production",
	},
	// Minimal configuration to avoid Turbopack/Webpack conflicts
	experimental: {
		turbo: {
			// Turbopack-specific rules
		},
	},
};

export default nextConfig;