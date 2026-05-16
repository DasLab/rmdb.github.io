---
layout: page
title: Contribute an entry
permalink: /contribute/
---

RMDB now accepts new entries via **pull request** against [DasLab/rmdb.github.io](https://github.com/DasLab/rmdb.github.io). Detailed steps live in the repository's [CONTRIBUTING.md](https://github.com/DasLab/rmdb.github.io/blob/main/CONTRIBUTING.md).

## High level

1. Validate your RDAT file with [`rdat_kit`]({{ '/deposit/validate/' | relative_url }}).
2. Fork the repo, add three files:
   - `_entries/<RMDB_ID>.md` — YAML front-matter with `rmdb_id`, `name`, `sequence`, `structure`, `citation`, etc.
   - `data/<RMDB_ID>.rdat` — your RDAT file (git-LFS tracked).
   - `assets/thumbnails/<RMDB_ID>.png` — optional reactivity thumbnail.
3. Open a PR. Once merged, the entry is live at `rmdb.stanford.edu/detail/<RMDB_ID>/`.

## Using an LLM agent

The contribution workflow is short and well-defined, which makes it well-suited to LLM coding agents (e.g. [Claude Code](https://claude.ai/code)). A single prompt like

> *"I have `entry.rdat` and `entry.png` in this directory. Use the RMDB CONTRIBUTING.md to add this entry to my fork of `rmdb.github.io`."*

is usually enough — the agent reads the contributing guide, parses your RDAT with `rdat_kit`, writes the `.md` front-matter, places files in the right paths, and opens the PR. See [CONTRIBUTING.md](https://github.com/DasLab/rmdb.github.io/blob/main/CONTRIBUTING.md) for the exact field list the agent will populate.
