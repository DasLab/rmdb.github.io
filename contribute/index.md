---
layout: page
title: Contribute an entry
permalink: /contribute/
---

RMDB now accepts new entries via **pull request** against [DasLab/rmdb.github.io](https://github.com/DasLab/rmdb.github.io). With the `rdat_kit` ≥ 1.8.0 CLI the whole submission is essentially three commands.

## One-time setup

```bash
pip install 'rdat_kit>=1.8.0' matplotlib   # matplotlib only needed for thumbnail
gh auth login                              # GitHub CLI; needed for the Release upload
git clone https://github.com/<you>/rmdb.github.io   # your fork
cd rmdb.github.io
```

## Per-entry submission

```bash
ID="MY_ENTRY_0000"

# 1. Validate the RDAT file
rdat_kit validate path/to/$ID.rdat
#    path/to/MY_ENTRY_0000.rdat: OK   (16 construct(s), 990 data row(s), RDAT_VERSION=0.34)

# 2. Generate the entry .md from the RDAT (auto-fills everything except citation)
rdat_kit to_md path/to/$ID.rdat > _entries/$ID.md
$EDITOR _entries/$ID.md     # fill in the citation block

# 3. Render the reactivity-heatmap thumbnail
rdat_kit thumbnail path/to/$ID.rdat --out assets/thumbnails/

# 4. Upload the .rdat to the right Release tag (see table below)
gh release upload data-general path/to/$ID.rdat --repo DasLab/rmdb.github.io

# 5. Commit + PR
git add _entries/$ID.md assets/thumbnails/$ID.png
git commit -m "Add entry $ID"
git push origin HEAD
gh pr create --fill
```

## Pick the right Release tag

| Tag | Holds |
|-----|-------|
| [`data-eterna`](https://github.com/DasLab/rmdb.github.io/releases/tag/data-eterna) | Eterna / OpenKnot library experiments |
| [`data-puzzle`](https://github.com/DasLab/rmdb.github.io/releases/tag/data-puzzle) | RNA Puzzles community blind-prediction challenges |
| [`data-riboswitches`](https://github.com/DasLab/rmdb.github.io/releases/tag/data-riboswitches) | TPP, SAM, glycine, FMN, fluoride, ZTP, etc. riboswitches |
| [`data-rna-structures`](https://github.com/DasLab/rmdb.github.io/releases/tag/data-rna-structures) | rRNA, tRNA, viral RNA, large mutate-and-map libraries |
| [`data-general`](https://github.com/DasLab/rmdb.github.io/releases/tag/data-general) | Everything else (default if you're unsure) |

Update the `rdat:` URL in your `_entries/<ID>.md` if you used a non-general tag — the default the stub emits is `data-general`.

## Using an LLM agent

The workflow is short and well-defined, which makes it ideal for LLM coding agents (e.g. [Claude Code](https://claude.ai/code), [Cursor](https://cursor.sh/)). A prompt like:

> *"I have `my_entry.rdat` and this publication PDF. Read RMDB's CONTRIBUTING.md, run `rdat_kit to_md` to produce the .md stub, fill the citation block from the PDF (or fetch by PMID), render the thumbnail with `rdat_kit thumbnail`, upload the `.rdat` to `data-general` via `gh release upload`, and open a PR."*

is usually enough — the agent reads the contributing guide, runs the three `rdat_kit` commands, fills the citation, uploads, and opens the PR. Review and merge.

## Full reference

Step-by-step instructions plus the YAML front-matter schema are in the repository's [CONTRIBUTING.md](https://github.com/DasLab/rmdb.github.io/blob/main/CONTRIBUTING.md).

## Preview your entry locally

```bash
bundle install
bundle exec jekyll serve --config _config.yml,_config_local.yml
# Open http://localhost:4000/detail/<RMDB_ID>/
```

## What happens after merge

- The entry is live at `https://rmdb.stanford.edu/detail/<RMDB_ID>/` within ~1 minute (GitHub Pages auto-builds).
- It appears in `/browse/` and (briefly) on the home page under "Latest entries".
- Future edits go through a new PR — full history via `git log`.
