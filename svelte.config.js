import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			// Output to 'build' directory for GitHub Pages
			pages: 'build',
			assets: 'build',
			// Fallback for SPA mode - use index.html for all routes
			fallback: undefined,
			// Enable prerendering by default
			precompress: false,
			// Strict mode - fail build if any pages can't be prerendered
			strict: true
		}),
		// Base path configuration for GitHub Pages
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/personal-website' : ''
		}
	}
};

export default config;
