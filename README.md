# pronounsa.re

## Develop

```sh
npm ci
npm run dev
```

Run the production Worker locally:

```sh
npm run build
npm run preview
```

## Deploy

Cloudflare custom domains are declared in `wrangler.jsonc`:

- `pronounsa.re`
- `my.pronounsa.re`

The `Deploy` GitHub Actions workflow runs `wrangler deploy` on pushes to `main` or `master`.
Configure these repository secrets before deploying:

- `CLOUDFLARE_WORKERS_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

The token needs `Account > Workers Scripts > Edit`, `Account > Account Settings > Read`,
`Zone > DNS > Edit`, and `Zone > Workers Routes > Edit` for the `pronounsa.re` zone.
