# Contributing an entry to RMDB

RMDB entries are plain Markdown files in this repo. To add a new entry, open a pull request that adds three files:

1. `_entries/<RMDB_ID>.md` — entry metadata (YAML front-matter + optional notes)
2. `data/<RMDB_ID>.rdat`   — your RDAT file (git-LFS tracked; `git lfs install` if you haven't already)
3. `assets/thumbnails/<RMDB_ID>.png` — reactivity thumbnail (optional but encouraged)

## Step-by-step

```bash
# 1. Fork + clone
git clone https://github.com/<you>/rmdb.github.io
cd rmdb.github.io
git lfs install

# 2. Validate the RDAT file (requires rdat_kit; see /deposit/validate/)
pip install rdat_kit
rdat_kit validate path/to/your.rdat

# 3. Drop the files in place
ID="YOURID_EXP_0000"
cp path/to/your.rdat       data/$ID.rdat
cp path/to/your_thumb.png  assets/thumbnails/$ID.png

# 4. Author the entry .md (see template below)
$EDITOR _entries/$ID.md

# 5. Commit (LFS handles the .rdat) and open a PR
git add data/$ID.rdat assets/thumbnails/$ID.png _entries/$ID.md
git commit -m "Add entry $ID"
git push origin HEAD
```

## Entry `.md` template

Copy any file from `_entries/` as a starting point, or use this template:

```yaml
---
rmdb_id: YOURID_EXP_0000
name: "Short human-readable name"
category: General            # General | RNA_Puzzles | Eterna
date: 2026-05-15             # ISO date; used for "Latest entries" sort
sequence: "GGGAAACUGCC..."
structure: "(((..((....."    # dot-bracket; same length as sequence
offset: 0
construct_count: 1
data_points: 250
creation_date: "05/15/26"    # free-form display string from your RDAT
version: 1
owner: "Your Name"
citation:
  authors:  "Your, A., Other, B."
  title:    "Your paper title"
  journal:  "Nature Methods"
  year:     2026
  doi:      "10.1038/s41592-..."
  pubmed:   "12345678"
annotation:
  chemical:   ["MgCl2:10mM", "Na-HEPES:50mM(pH8.0)"]
  temperature: "24C"
  modifier:   "1M7"
thumbnail: /assets/thumbnails/YOURID_EXP_0000.png
rdat:      /data/YOURID_EXP_0000.rdat
---

Optional Markdown notes (rendered into the "Notes" section of the entry page).
```

All front-matter fields are optional except `rmdb_id`, `name`, `sequence`. If `thumbnail` or `rdat` is omitted, the corresponding panel on the entry page is hidden.

## Using Claude Code (or another LLM agent)

If you have an RDAT file and a publication, you can hand the task to an LLM coding agent. A prompt like:

> "Here's `my_entry.rdat` and the publication PDF. Read RMDB's CONTRIBUTING.md, parse the RDAT with rdat_kit to extract sequence/structure/annotations, fetch the citation from the PMID, and add this entry as a new branch and PR."

is usually enough — the agent reads this file, infers the field mapping, runs `rdat_kit` to populate the data, and opens a PR for you to review.

## Preview locally

```bash
bundle install
bundle exec jekyll serve
# Open http://localhost:4000/detail/<RMDB_ID>/
```

## When a PR is merged

- The entry is live at `https://rmdb.stanford.edu/detail/<RMDB_ID>/` within ~1 minute (GitHub Pages auto-builds).
- It appears in `/browse/` and (briefly) on the home page under "Latest entries".
- Future edits go through a new PR — full history via `git log`.
