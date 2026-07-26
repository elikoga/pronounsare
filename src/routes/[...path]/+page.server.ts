import { matchingPronouns, pronounFromSegments } from '$lib/pronouns';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = ({ params, url }) => {
	const segments = (params.path ?? '').split('/').filter(Boolean);
	const exact = segments.length === 5;

	return {
		hostname: url.hostname,
		path: segments.join('/'),
		segments,
		exact,
		pronouns: exact ? [pronounFromSegments(segments)] : matchingPronouns(segments)
	};
};
