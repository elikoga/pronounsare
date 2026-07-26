# pronounsa.re

Shareable pronoun pages, rebuilt as a SvelteKit app running on Cloudflare Workers.

The original Micronaut application's pronoun data and matching behavior are preserved in
`src/lib/pronouns.ts`. The root domain is a generator landing page; `my.pronounsa.re` and
the root domain both serve shareable paths such as `/he/they`.

## Developing

```sh
npm ci
npm run dev
```

Run the production Worker locally:

```sh
npm run build
npm run preview
```

## Deployment

Cloudflare custom domains are declared in `wrangler.jsonc`:

- `pronounsa.re`
- `my.pronounsa.re`

The `Deploy` GitHub Actions workflow runs `wrangler deploy` on pushes to `main` or `master`.
Configure these repository secrets before the first deployment:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

The token needs `Account > Workers Scripts > Edit`, `Account > Account Settings > Read`,
`Zone > DNS > Edit`, and `Zone > Workers Routes > Edit` for the `pronounsa.re` zone.
DNSControl deliberately leaves the existing zone records in place during this migration;
Wrangler creates the Worker custom-domain records.
