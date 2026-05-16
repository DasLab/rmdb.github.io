# rmdb.github.io

Static GitHub Pages mirror of [rmdb.stanford.edu](https://rmdb.stanford.edu) — the RNA Mapping Database.

Built with vanilla Jekyll (no custom plugins). Each entry is a single Markdown file under `_entries/<RMDB_ID>.md`; RDAT data files live under `data/` (git-LFS); reactivity thumbnails under `assets/thumbnails/`.

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
data/<RMDB_ID>.rdat         RDAT data file, LFS-tracked
assets/thumbnails/<X>.png   reactivity thumbnail
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

## Hosting notes

- GitHub Pages builds Jekyll automatically on every push to `main`.
- `CNAME` points at `rmdb.stanford.edu` — Stanford IT must add a CNAME DNS record pointing the domain at `daslab.github.io` (the org's Pages root).
- HTTPS is auto-issued by GitHub once DNS propagates.

## Legacy site

The original Django+MySQL site (EC2 instance `35.95.143.115`) is archived under [`../aws_archive/`](../aws_archive/) (Docker-compose-bootable snapshot of the app + MySQL dump). See that directory's README for details.
