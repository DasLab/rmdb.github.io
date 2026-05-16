---
layout: page
title: Deposit
permalink: /deposit/
---

RMDB stores RNA structural mapping data in the open **RDAT** format — a hierarchical text format designed for SHAPE, DMS, CMCT, 1M7, mutate-and-map, M2-seq, and related experiments.

## Resources

- **[RDAT format specification]({{ '/deposit/specs/' | relative_url }})** — fields, sections, controlled vocabulary, examples.
- **[Validate an RDAT file]({{ '/deposit/validate/' | relative_url }})** — schema check via [`rdat_kit`](https://github.com/ribokit/rdat_kit).
- **[Contribute an entry]({{ '/contribute/' | relative_url }})** — pull-request workflow for adding new RMDB entries.

## What happened to "Submit Entry"?

The legacy site had an interactive web form for entry submission backed by Django + MySQL. The static site replaces it with a [PR-based contribution workflow]({{ '/contribute/' | relative_url }}) — same data, simpler infrastructure, full git history.
