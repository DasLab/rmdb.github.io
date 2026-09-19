# rmdb.github.io

Static GitHub Pages mirror of [rmdb.stanford.edu](https://rmdb.stanford.edu) — the RNA Mapping Database.

Built with vanilla Jekyll (no custom plugins). Each entry is a single Markdown file under `_entries/<RMDB_ID>.md`; reactivity thumbnails under `assets/thumbnails/`; RDAT data files live as assets on five GitHub Releases — `data-eterna`, `data-puzzle`, `data-riboswitches`, `data-rna-structures`, `data-general` (not in the repo — Pages can't serve git-LFS objects, and some RDATs are 100–300 MB). Each entry's `rdat:` front-matter holds the full asset URL.

## Local preview

```bash
bundle install
bundle exec jekyll serve
# browse to http://localhost:4000
```

## Adding an entry

See [CONTRIBUTING.md](CONTRIBUTING.md).

## Layout

```
_config.yml                 Jekyll config; declares `entries` collection
_layouts/                   default | page | entry layouts
_includes/                  head, nav, footer partials
_entries/<RMDB_ID>.md       one per entry (YAML front-matter + optional Markdown notes)
assets/thumbnails/<X>.png   reactivity thumbnail
# RDATs are NOT in the repo — they're assets on the five data-* Releases.
assets/css/style.scss       site styles
assets/js/search.js         browse-page client-side filter
manifest.json               Liquid-templated index of all entries (for client-side search)
index.html                  front page
browse/index.html           browse/filter UI
about/index.md              about page
deposit/                    RDAT format docs & validation
contribute/index.md         contribution workflow
CNAME                       rmdb.stanford.edu
```

## URLs preserved from the legacy site

| Legacy URL pattern             | New URL pattern             |
|--------------------------------|-----------------------------|
| `/detail/<RMDB_ID>`            | `/detail/<RMDB_ID>/`        |
| `/browse/`                     | `/browse/`                  |
| `/deposit/specs/`              | `/deposit/specs/`           |
| `/deposit/validate/`           | `/deposit/validate/`        |
| `/help/about/`                 | `/about/`                   |

Everything else from the old Django app is handled at runtime by **`404.html`**, a client-side
router. GitHub Pages serves that file for any missing path, so it catches `/repository/*`,
`/site_media/rdat_files/*`, `/site_data/file/*`, `/search/`, `/tools/*` and more, and rewrites
them to their new homes. Read the comments in `404.html` before renaming or removing a route —
its rules assume the current URL shape. Note the HTTP status stays 404 (Pages cannot issue real
301s), so the redirect works in browsers but not for `curl` or crawlers.

## Hosting notes

- **Build type: the legacy GitHub Pages Jekyll builder** (no Actions workflow in this repo).
  Pages builds automatically on every push to `main`. Check deploy status with:
  ```bash
  gh api repos/DasLab/rmdb.github.io/pages/builds/latest --jq '.status'
  ```
  Note this differs from `DasLab/DasLab.github.io`, which deploys via GitHub Actions and
  where that endpoint returns 404 — there you must use `gh run list` instead.
- `CNAME` points at `rmdb.stanford.edu` — Stanford IT must add a CNAME DNS record pointing the domain at `daslab.github.io` (the org's Pages root).
- HTTPS is auto-issued by GitHub once DNS propagates.

## Legacy site

The original Django+MySQL site (EC2 instance `35.95.143.115`) is archived under [`../aws_archive/`](../aws_archive/) (Docker-compose-bootable snapshot of the app + MySQL dump). See that directory's README for details.
