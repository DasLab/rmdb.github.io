---
layout: page
title: Validate an RDAT file
permalink: /deposit/validate/
---

The legacy RMDB site offered an in-browser RDAT validator. The static site delegates this to the open-source [`rdat_kit`](https://github.com/ribokit/rdatkit) Python package (≥ v1.7.0).

## Install

```bash
pip install 'rdat_kit>=1.7.0'
```

## Validate a file

```bash
rdat_kit validate path/to/entry.rdat
```

Output is one line per file:

```
path/to/entry.rdat: OK   (1 construct(s), 272 data row(s), RDAT_VERSION=0.34)
```

Exit code:

| Code | Meaning |
|------|---------|
| `0`  | File parsed cleanly and `RDATFile.validate()` returned no warnings |
| `1`  | Parse failure — malformed file |
| `2`  | Parsed OK but at least one schema warning (see stdout) |

You can pass multiple files at once:

```bash
rdat_kit validate *.rdat
```

## What is checked

- `RDAT_VERSION` is one of the supported revisions (0.32 / 0.33 / 0.34).
- `SEQUENCE` is a valid RNA string (`ACGUTacguTNn`); length matches `SEQPOS` extent.
- `STRUCTURE` has balanced brackets and matches `SEQUENCE` length.
- Every `REACTIVITY:<i>` has a matching `ANNOTATION_DATA:<i>`.
- `ANNOTATION` keys are in the controlled vocabulary (warning only — unknown keys are allowed but flagged).
- Numeric fields parse as floats.

See [the RDAT format spec]({{ '/deposit/specs/' | relative_url }}) for full definitions.

## Companion subcommands

`rdat_kit` exposes three subcommands in total:

```bash
rdat_kit validate   <file.rdat>            # this page
rdat_kit to_md      <file.rdat>            # emit Jekyll front-matter stub
rdat_kit thumbnail  <file.rdat> --out DIR  # render reactivity heatmap PNG
```

`to_md` auto-populates `sequence`, `structure`, `offset`, `construct_count`, `data_points`, `annotation`, `comments`, and the citation skeleton from the RDAT contents — saving the contributor from writing the YAML by hand.

`thumbnail` requires `matplotlib` (an optional dep): `pip install 'rdat_kit[thumbnail]' or 'pip install matplotlib`. It truncates huge libraries to the first 1000 rows by default (`--max-rows` to override) and renders a heatmap to drop into [`assets/thumbnails/`](https://github.com/DasLab/rmdb.github.io/tree/main/assets/thumbnails).

See [the contribute page]({{ '/contribute/' | relative_url }}) for the full submission workflow.
