---
layout: page
title: RDAT format specification
permalink: /deposit/specs/
---

The **RDAT** file format is a hierarchical, tab-separated text format for RNA structural mapping data. The current revision is **0.34**.

## File structure

An RDAT file has three sections:

1. **General header** — version, name, construct sequence, structure, offset, comments.
2. **Construct annotation** — one or more lines starting with `ANNOTATION_DATA:<index>` describing each variant/replicate.
3. **Data** — `REACTIVITY:<index>`, `REACTIVITY_ERROR:<index>`, optional `TRACE:<index>` and `READS:<index>` lines (tab-separated values, one per nucleotide position in `SEQPOS`).

### General header keys

| Key            | Meaning |
|----------------|---------|
| `RDAT_VERSION` | Format version (currently `0.34`) |
| `NAME`         | Human-readable construct name |
| `SEQUENCE`     | RNA sequence (single-letter, uppercase main / lowercase flanking) |
| `STRUCTURE`    | Secondary structure (dot-bracket) |
| `OFFSET`       | Number subtracted from `SEQPOS` indices to give the user-facing numbering |
| `SEQPOS`       | List of positions for which reactivity is reported |
| `COMMENT`      | Free-form notes (repeated allowed) |
| `ANNOTATION`   | Construct-level annotations (`key:value` pairs, tab-separated; repeated allowed) |

### Common `ANNOTATION` keys

`chemical:` (e.g. `MgCl2:10mM`), `temperature:` (`24C`), `modifier:` (`DMS`, `1M7`, `CMCT`, `NMIA`, …), `processing:` (pipeline steps), `reverse_transcriptase:`, `experimentType:` (`StandardState`, `MutateAndMap`, …).

### Construct-level vs data-level annotations

Annotations on the `ANNOTATION` line apply to the whole construct. Annotations on `ANNOTATION_DATA:<i>` lines apply only to data row `i` (e.g. a single mutant in a mutate-and-map series). The data row's annotations *override* the construct-level ones for that row.

## Example

A minimal RDAT file:

```
RDAT_VERSION    0.34
NAME            16S rRNA Four-Way Junction
SEQUENCE        GGGAAACUGCCUGAUGGAGGGG...
STRUCTURE       (((..((...(((((((.(((....
OFFSET          125
COMMENT         Standard-state SHAPE in 10 mM MgCl2.
ANNOTATION      chemical:MgCl2:10mM   temperature:24C   modifier:1M7
ANNOTATION_DATA:1    sequence:GGGAAACUGCC...    name:wt    reads:12000
REACTIVITY:1         0.12    0.08    0.34    ...
REACTIVITY_ERROR:1   0.01    0.01    0.02    ...
```

Real RMDB entries usually contain dozens to thousands of `ANNOTATION_DATA` / `REACTIVITY` rows.

## Reference implementation

The Python reference parser is [`rdat_kit`](https://github.com/ribokit/rdat_kit) (Apache 2.0). The `RDATFile` class loads, validates, and round-trips files of all versions back to 0.1.

For validating a file against this spec, see [the validate page]({{ '/deposit/validate/' | relative_url }}).
