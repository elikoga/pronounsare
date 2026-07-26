import { matchingPronouns, pronounFromSegments } from '$lib/pronouns';
import { siteFor } from '$lib/site';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params, url }) => {
	const segments = (params.path ?? '').split('/').filter(Boolean);
	const exact = segments.length === 5;
	const site = siteFor(url.hostname);

	return {
		site,
		path: segments.join('/'),
		segments,
		exact,
		pronouns: exact ? [pronounFromSegments(segments)] : matchingPronouns(segments)
	};
};
