---
layout: page
title: About
permalink: /about/
---

## What is RMDB?

The **RNA Mapping Database (RMDB)** is an archive of RNA structural mapping experiments — SHAPE, DMS, CMCT, 1M7, mutate-and-map, M2-seq, and related techniques. Each entry contains reactivity profiles for one or more RNA constructs under defined chemical and folding conditions, hand-curated and annotated by the depositors.

## RMDB Website

This site is a **static GitHub Pages mirror** of the legacy RMDB Django site (`rmdb.stanford.edu`, 2012–2026). The dynamic site was retired in 2026 to make RMDB easier to maintain and contribute to: entries are now plain Markdown files in a public GitHub repository, RDAT files live alongside as version-controlled data, and updates happen via pull request.

What changed from the legacy site:

- **Detail pages** still show the Construct and Citation panels, with the cached reactivity thumbnail. Interactive heatmap views, color-scale sliders, and the live annotation/reactivity sidebars are no longer rendered — the underlying data is still available via the `.rdat` download for use in [`rdat_kit`](https://github.com/ribokit/rdat_kit) or any RNA-mapping tool.
- **History tabs** are gone; versioning is now via git history on the repo.
- **MyRMDB / Submit Entry / Analyze / Tools** menus have been removed.
- **Deposit** still documents the RDAT format and validation; **Contribute** explains the PR workflow for adding new entries.

## Download all data

Every entry's RDAT file lives as a GitHub Release asset, split across **five subcategory releases** so each stays well under GitHub's 1,000-asset-per-release cap:

| Release | Holds | Browse |
|---|---|---|
| [`data-eterna`](https://github.com/DasLab/rmdb.github.io/releases/tag/data-eterna) | Eterna and OpenKnot library experiments | 181 |
| [`data-puzzle`](https://github.com/DasLab/rmdb.github.io/releases/tag/data-puzzle) | RNA Puzzles community blind-prediction challenges | 94 |
| [`data-riboswitches`](https://github.com/DasLab/rmdb.github.io/releases/tag/data-riboswitches) | Riboswitch families (TPP, SAM, glycine, FMN, ZTP, fluoride, …) | 253 |
| [`data-rna-structures`](https://github.com/DasLab/rmdb.github.io/releases/tag/data-rna-structures) | Ribosomal & transfer RNAs, viral RNAs (CoV-2, HIV, HCV, …), big mutate-and-map libraries | 275 |
| [`data-general`](https://github.com/DasLab/rmdb.github.io/releases/tag/data-general) | Everything else — heterogeneous tail | 220 |

### Browse and click

Open any of the release pages above and download individual `.rdat` files. Each asset is named `<RMDB_ID>.rdat`.

### Grab one subcategory with the GitHub CLI

```bash
gh release download data-riboswitches \
    --repo DasLab/rmdb.github.io \
    --pattern "*.rdat" \
    --dir rdats/
```

### Grab the entire database (all five releases)

```bash
for r in eterna puzzle riboswitches rna-structures general; do
    gh release download "data-$r" \
        --repo DasLab/rmdb.github.io \
        --pattern "*.rdat" \
        --dir rdats/
done
```

Streams directly from GitHub's CDN — no bandwidth metering on either side, no need for a pre-built `published_rdat.zip`.

For per-entry programmatic access, each detail page's "Download .rdat" button is a permanent direct link to that entry's Release asset.

## Citation

If you use RMDB data in your research, please cite:

> Cordero P., Lucks J.B., Das R. **An RNA Mapping DataBase for curating RNA structure mapping experiments**. *Bioinformatics* 28(22): 3006–3008 (2012). [doi:10.1093/bioinformatics/bts554](https://doi.org/10.1093/bioinformatics/bts554)

## License

- **Database content** (RDAT files, metadata, thumbnails): [CC0 1.0](https://creativecommons.org/publicdomain/zero/1.0/) — public domain.
- **Site content** (layout, prose, code): [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).

## Contact

- Principal Investigator: [Rhiju Das](mailto:rhiju@stanford.edu) (Stanford Biochemistry, HHMI)
- Site code: <https://github.com/DasLab/rmdb.github.io>
- Issues / questions: please open a [GitHub issue](https://github.com/DasLab/rmdb.github.io/issues).
