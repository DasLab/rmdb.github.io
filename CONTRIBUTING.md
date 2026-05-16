# Contributing an entry to RMDB

RMDB entries are plain Markdown files in this repo. With [`rdat_kit`](https://github.com/ribokit/rdatkit) ≥ 1.7.0 the workflow is essentially three commands.

Each new entry consists of:

1. `_entries/<RMDB_ID>.md` — entry metadata (YAML front-matter, generated for you by `rdat_kit to_md`)
2. `assets/thumbnails/<RMDB_ID>.png` — reactivity thumbnail (optional but encouraged; see [thumbnail-generation](#regenerating-a-thumbnail) below)
3. Your `.rdat` file uploaded to one of the five subcategory **GitHub Release** tags (not committed to the repo — Pages can't serve git-LFS objects, and some RDATs are 100–300 MB).

Release tags to choose from (pick the one matching your entry's content):

| Tag | Holds |
|-----|-------|
| `data-eterna` | Eterna / OpenKnot library experiments |
| `data-puzzle` | RNA Puzzles community blind-prediction challenges |
| `data-riboswitches` | TPP, SAM, glycine, FMN, fluoride, ZTP, etc. riboswitches |
| `data-rna-structures` | rRNA, tRNA, viral RNA, large mutate-and-map libraries |
| `data-general` | Everything else |

## Step-by-step

```bash
# 1. Fork + clone
git clone https://github.com/<you>/rmdb.github.io
cd rmdb.github.io

# 2. Install rdat_kit (one-time)
pip install 'rdat_kit>=1.7.0'

# 3. Validate your RDAT
rdat_kit validate path/to/MY_ENTRY_0000.rdat
#   path/to/MY_ENTRY_0000.rdat: OK   (16 construct(s), 990 data row(s), RDAT_VERSION=0.34)

# 4. Generate the entry .md stub from the RDAT (auto-fills sequence,
#    structure, annotations, comments, counts)
ID="MY_ENTRY_0000"
rdat_kit to_md path/to/$ID.rdat > _entries/$ID.md
$EDITOR _entries/$ID.md     # fill in citation/authors and confirm date

# 5. Generate a thumbnail (optional but recommended; requires matplotlib)
rdat_kit thumbnail path/to/$ID.rdat --out assets/thumbnails/

# 6. Upload the .rdat to the right Release
gh release upload data-general path/to/$ID.rdat --repo DasLab/rmdb.github.io

# 7. Commit the .md + thumbnail, push, open a PR
git add _entries/$ID.md assets/thumbnails/$ID.png
git commit -m "Add entry $ID"
git push origin HEAD
gh pr create --fill
```

## Entry `.md` after step 4

`rdat_kit to_md` emits something like:

```yaml
---
rmdb_id: "MY_ENTRY_0000"
permalink: /detail/MY_ENTRY_0000/
name: "Construct name from the RDAT"
category: "General"     # General | RNA_Puzzles | Eterna  ← update if needed
date: 2026-05-16        # update with the original deposition date if known
sequence: "GGGAAACUGCC..."
structure: "(((..((....."
offset: 0
construct_count: 16
data_points: 990
comments: |
    (whatever was in the RDAT's COMMENT lines)
annotation:
  chemical:   ["MgCl2:10mM", "Na-HEPES:50mM(pH8.0)"]
  temperature: "24C"
  modifier:   "1M7"
citation:
  authors: ""        # ← fill in
  title:   ""
  journal: ""
  year:    ""
  doi:     ""
  pubmed:  ""
thumbnail: /assets/thumbnails/MY_ENTRY_0000.png
rdat:      https://github.com/DasLab/rmdb.github.io/releases/download/data-general/MY_ENTRY_0000.rdat
---
```

You only need to fill in:
- `citation:` block (authors, title, journal, year, DOI, PubMed ID)
- `date:` (the actual deposition date — default is today)
- `category:` if not General
- The release tag in `rdat:` if you uploaded somewhere other than `data-general`

All front-matter fields are optional except `rmdb_id`, `name`, `sequence`. If `thumbnail` or `rdat` is omitted, the corresponding panel on the entry page is hidden.

## Regenerating a thumbnail

`rdat_kit thumbnail` renders a single high-resolution PNG (~440 px short axis) from any RDAT. Browsers downscale gracefully on non-retina displays.

```bash
pip install 'rdat_kit>=1.8.0' matplotlib   # matplotlib is an optional dep
rdat_kit thumbnail path/to/MY_ENTRY_0000.rdat --out assets/thumbnails/
```

For large libraries (≥1000 data rows) the script truncates to the first 1000 rows automatically. Pass `--max-rows N` to override (e.g., `--max-rows 5000` for finer detail in mutate-and-map libraries).

## Using Claude Code (or another LLM agent)

The contribution workflow is short and well-defined, which makes it well-suited to LLM coding agents. A prompt like:

> *"I have `my_entry.rdat` and this publication PDF. Read RMDB's CONTRIBUTING.md, run `rdat_kit to_md` to produce the .md stub, fill the citation block from the PDF (or fetch by PMID), regenerate the thumbnail with `regen_thumbnail.py`, upload the .rdat to `data-general`, and open a PR."*

is usually enough — the agent reads this file, runs the commands, and opens the PR for you to review.

## Preview locally

```bash
bundle install
bundle exec jekyll serve --config _config.yml,_config_local.yml
# Open http://localhost:4000/detail/<RMDB_ID>/
```

## When a PR is merged

- The entry is live at `https://rmdb.stanford.edu/detail/<RMDB_ID>/` within ~1 minute (GitHub Pages auto-builds).
- It appears in `/browse/` and (briefly) on the home page under "Latest entries".
- Future edits go through a new PR — full history via `git log`.
