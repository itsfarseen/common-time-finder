import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		paths: {assets: "https://itsfarseen.github.io/common-time-finder",},
		prerender: {
			default: true,
		},
	}
};

export default config;
