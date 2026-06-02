---
layout: page
title: Deposit a new entry
permalink: /deposit/
---

RMDB stores RNA structural mapping data in the open **RDAT** format — a hierarchical text format designed for SHAPE, DMS, CMCT, 1M7, mutate-and-map, M2-seq, and related experiments.

New entries are added via **pull request** against [DasLab/rmdb.github.io](https://github.com/DasLab/rmdb.github.io). See [**CONTRIBUTING.md**](https://github.com/DasLab/rmdb.github.io/blob/main/CONTRIBUTING.md) for the full submission workflow — with the [`rdat_kit`](https://github.com/ribokit/rdatkit) ≥ 1.8.0 CLI it's essentially three commands (`validate`, `to_md`, `thumbnail`), a `gh release upload`, and a PR.

## RDAT format reference

- **[RDAT format specification]({{ '/deposit/specs/' | relative_url }})** — fields, sections, controlled vocabulary, examples.
- **[Validate an RDAT file]({{ '/deposit/validate/' | relative_url }})** — schema check via `rdat_kit validate`.

## What happened to "Submit Entry"?

The legacy site had an interactive web form for entry submission backed by Django + MySQL. The static site replaces that with a [PR-based workflow](https://github.com/DasLab/rmdb.github.io/blob/main/CONTRIBUTING.md).
