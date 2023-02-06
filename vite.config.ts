import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	base:'/launch-countdown-timer-main',
	plugins: [sveltekit()]
};

export default config;
