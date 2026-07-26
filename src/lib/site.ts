export const PUBLIC_HOST = 'pronounsa.re';
export const PERSONAL_HOST = 'my.pronounsa.re';

export type Site = {
	hostname: string;
	isPersonalSubdomain: boolean;
	shareOrigin: string;
};

function normalizePath(path: string): string {
	return `/${path.replace(/^\/+/, '')}`;
}

export function siteFor(hostname: string): Site {
	const normalizedHostname = hostname.toLowerCase();
	const isPersonalSubdomain = normalizedHostname === PERSONAL_HOST;
	const hostnameForLinks = isPersonalSubdomain ? PERSONAL_HOST : PUBLIC_HOST;
	const shareOrigin = `https://${hostnameForLinks}`;

	return {
		hostname: hostnameForLinks,
		isPersonalSubdomain,
		shareOrigin
	};
}

export function shareUrlFor(site: Site, path: string): string {
	return site.isPersonalSubdomain
		? normalizePath(path)
		: `${siteFor(PERSONAL_HOST).shareOrigin}${normalizePath(path)}`;
}
