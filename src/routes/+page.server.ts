import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ url }) => ({
	hostname: url.hostname,
	isPersonalSubdomain: url.hostname === 'my.pronounsa.re'
});
