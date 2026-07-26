export type Pronoun = {
	subject: string;
	object: string;
	dependentPossessive: string;
	independentPossessive: string;
	reflexive: string;
};

// Reconstructed from src/main/resources/pronouns.tsv in the original Micronaut app.
export const pronouns: Pronoun[] = [
	{ subject: 'she', object: 'her', dependentPossessive: 'her', independentPossessive: 'hers', reflexive: 'herself' },
	{ subject: 'he', object: 'him', dependentPossessive: 'his', independentPossessive: 'his', reflexive: 'himself' },
	{ subject: 'they', object: 'them', dependentPossessive: 'their', independentPossessive: 'theirs', reflexive: 'themselves' },
	{ subject: 'ze', object: 'hir', dependentPossessive: 'hir', independentPossessive: 'hirs', reflexive: 'hirself' },
	{ subject: 'ze', object: 'zir', dependentPossessive: 'zir', independentPossessive: 'zirs', reflexive: 'zirself' },
	{ subject: 'xey', object: 'xem', dependentPossessive: 'xyr', independentPossessive: 'xyrs', reflexive: 'xemself' },
	{ subject: 'ae', object: 'aer', dependentPossessive: 'aer', independentPossessive: 'aers', reflexive: 'aerself' },
	{ subject: 'e', object: 'em', dependentPossessive: 'eir', independentPossessive: 'eirs', reflexive: 'emself' },
	{ subject: 'ey', object: 'em', dependentPossessive: 'eir', independentPossessive: 'eirs', reflexive: 'eirself' },
	{ subject: 'fae', object: 'faer', dependentPossessive: 'faer', independentPossessive: 'faers', reflexive: 'faerself' },
	{ subject: 'fey', object: 'fem', dependentPossessive: 'feir', independentPossessive: 'feirs', reflexive: 'feirself' },
	{ subject: 'hu', object: 'hum', dependentPossessive: 'hus', independentPossessive: 'hus', reflexive: 'humself' },
	{ subject: 'it', object: 'it', dependentPossessive: 'its', independentPossessive: 'its', reflexive: 'itself' },
	{ subject: 'jee', object: 'jem', dependentPossessive: 'jeir', independentPossessive: 'jeirs', reflexive: 'jemself' },
	{ subject: 'kit', object: 'kit', dependentPossessive: 'kits', independentPossessive: 'kits', reflexive: 'kitself' },
	{ subject: 'ne', object: 'nem', dependentPossessive: 'nir', independentPossessive: 'nirs', reflexive: 'nemself' },
	{ subject: 'peh', object: 'pehm', dependentPossessive: "peh's", independentPossessive: "peh's", reflexive: 'pehself' },
	{ subject: 'per', object: 'per', dependentPossessive: 'per', independentPossessive: 'pers', reflexive: 'perself' },
	{ subject: 'sie', object: 'hir', dependentPossessive: 'hir', independentPossessive: 'hirs', reflexive: 'hirself' },
	{ subject: 'se', object: 'sim', dependentPossessive: 'ser', independentPossessive: 'sers', reflexive: 'serself' },
	{ subject: 'shi', object: 'hir', dependentPossessive: 'hir', independentPossessive: 'hirs', reflexive: 'hirself' },
	{ subject: 'si', object: 'hyr', dependentPossessive: 'hyr', independentPossessive: 'hyrs', reflexive: 'hyrself' },
	{ subject: 'they', object: 'them', dependentPossessive: 'their', independentPossessive: 'theirs', reflexive: 'themself' },
	{ subject: 'thon', object: 'thon', dependentPossessive: 'thons', independentPossessive: 'thons', reflexive: 'thonself' },
	{ subject: 'tre', object: 'trem', dependentPossessive: 'trer', independentPossessive: 'trer', reflexive: 'tremself' },
	{ subject: 've', object: 'ver', dependentPossessive: 'vis', independentPossessive: 'vis', reflexive: 'verself' },
	{ subject: 've', object: 'vem', dependentPossessive: 'vir', independentPossessive: 'virs', reflexive: 'vemself' },
	{ subject: 'vi', object: 'ver', dependentPossessive: 'ver', independentPossessive: 'vers', reflexive: 'verself' },
	{ subject: 'vi', object: 'vim', dependentPossessive: 'vir', independentPossessive: 'virs', reflexive: 'vimself' },
	{ subject: 'vi', object: 'vim', dependentPossessive: 'vim', independentPossessive: 'vims', reflexive: 'vimself' },
	{ subject: 'xie', object: 'xer', dependentPossessive: 'xer', independentPossessive: 'xers', reflexive: 'xerself' },
	{ subject: 'xe', object: 'xem', dependentPossessive: 'xyr', independentPossessive: 'xyrs', reflexive: 'xemself' },
	{ subject: 'xey', object: 'xem', dependentPossessive: 'xeir', independentPossessive: 'xeirs', reflexive: 'xemself' },
	{ subject: 'yo', object: 'yo', dependentPossessive: 'yos', independentPossessive: 'yos', reflexive: 'yosself' },
	{ subject: 'ze', object: 'zem', dependentPossessive: 'zes', independentPossessive: 'zes', reflexive: 'zirself' },
	{ subject: 'ze', object: 'mer', dependentPossessive: 'zer', independentPossessive: 'zers', reflexive: 'zemself' },
	{ subject: 'zee', object: 'zed', dependentPossessive: 'zeta', independentPossessive: 'zetas', reflexive: 'zedself' },
	{ subject: 'zie', object: 'zir', dependentPossessive: 'zir', independentPossessive: 'zirs', reflexive: 'zirself' },
	{ subject: 'zie', object: 'zem', dependentPossessive: 'zes', independentPossessive: 'zes', reflexive: 'zirself' },
	{ subject: 'zie', object: 'hir', dependentPossessive: 'hir', independentPossessive: 'hirs', reflexive: 'zirself' },
	{ subject: 'zme', object: 'zmyr', dependentPossessive: 'zmyr', independentPossessive: 'zmyrs', reflexive: 'zmyrself' },
	{ subject: 'testasd', object: 'testr', dependentPossessive: 'testr', independentPossessive: 'testrs', reflexive: 'testself' }
];

function values(pronoun: Pronoun): string[] {
	return [pronoun.subject, pronoun.object, pronoun.dependentPossessive, pronoun.independentPossessive, pronoun.reflexive];
}

function matchesCount(pronoun: Pronoun, candidates: string[]): number {
	const pronounValues = values(pronoun);
	return candidates.reduce((count, candidate) => count + (pronounValues.includes(candidate) ? 1 : 0), 0);
}

export function pronounFromSegments(segments: string[]): Pronoun {
	return {
		subject: segments[0] ?? '',
		object: segments[1] ?? '',
		dependentPossessive: segments[2] ?? '',
		independentPossessive: segments[3] ?? '',
		reflexive: segments[4] ?? ''
	};
}

export function matchingPronouns(segments: string[]): Pronoun[] {
	const matches = pronouns
		.map((pronoun, index) => ({ pronoun, index, count: matchesCount(pronoun, segments) }))
		.filter(({ count }) => count > 0)
		.sort((left, right) => right.count - left.count || left.index - right.index)
		.map(({ pronoun }) => pronoun);

	const distinct: Pronoun[] = [];
	for (const candidate of matches) {
		if (!distinct.some((existing) => matchesCount(candidate, values(existing)) > 0)) {
			distinct.push(candidate);
		}
	}

	return distinct;
}

export function pathForPronoun(pronoun: Pronoun): string {
	return values(pronoun).join('/');
}
