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

Every entry's RDAT file is hosted as a GitHub Release asset on
[`data-v1`](https://github.com/DasLab/rmdb.github.io/releases/tag/data-v1).
You can:

- **Browse + click**: open the [Release page](https://github.com/DasLab/rmdb.github.io/releases/tag/data-v1) and download files individually.
- **Bulk download** with the GitHub CLI:

  ```bash
  gh release download data-v1 \
      --repo DasLab/rmdb.github.io \
      --pattern "*.rdat" \
      --dir rdats/
  ```

  Replaces the legacy `published_rdat.zip` bundle. Streams directly from GitHub's CDN; no bandwidth charge to either side.

For per-entry programmatic access, each detail page's "Download .rdat" button is a permanent direct link to the same Release asset.

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
