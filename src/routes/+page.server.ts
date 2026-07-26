import { siteFor } from '$lib/site';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ url }) => {
	const site = siteFor(url.hostname);

	return {
		site
	};
};
