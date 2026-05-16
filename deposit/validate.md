---
layout: page
title: Validate an RDAT file
permalink: /deposit/validate/
---

The legacy RMDB site offered an in-browser RDAT validator. The static site delegates this to the open-source [`rdat_kit`](https://github.com/ribokit/rdat_kit) Python package.

## Install

```bash
pip install rdat_kit
```

## Validate a file

```bash
rdat_kit validate path/to/entry.rdat
```

Exit code is `0` on success; on failure, `rdat_kit` prints the line and field where the schema check failed.

> **Note (planned, May 2026):** The `validate` subcommand is being added to `rdat_kit` as part of the RMDB static-site migration. Until it lands, you can validate by loading the file in Python:
>
> ```python
> from rdat_kit.handler import RDATFile
> rdat = RDATFile()
> rdat.load(open("entry.rdat"))
> print(rdat.validate())   # returns list of warnings/errors
> ```

## What is checked

- `RDAT_VERSION` is one of the supported revisions (0.32 / 0.33 / 0.34).
- `SEQUENCE` is a valid RNA string (`ACGUTacguTNn`); length matches `SEQPOS` extent.
- `STRUCTURE` has balanced brackets and matches `SEQUENCE` length.
- Every `REACTIVITY:<i>` has a matching `ANNOTATION_DATA:<i>`.
- `ANNOTATION` keys are in the controlled vocabulary (warning only — unknown keys are allowed but flagged).
- Numeric fields parse as floats.

See [the RDAT format spec]({{ '/deposit/specs/' | relative_url }}) for full definitions.
