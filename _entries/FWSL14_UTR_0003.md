---
rmdb_id: "FWSL14_UTR_0003"
permalink: /detail/FWSL14_UTR_0003/
name: "Covid19 TRS"
category: "General"
date: 2024-08-02
creation_date: "08/02/24"
version: 1
sequence: "AUUAAAGGUUUAUACCUUCCCAGGUAACAAACCAACCAACUUUCGAUCUCUUGUAGAUCUGUUCUCUAAACGAACUUUAAAAUCUGUGUGGCUGUCACUCGGCUGCAUGCUUAGUGCACUCACGCAGUAUAAUUAAUAACUAAUUACUG"
structure: "......(((((.(((((....)))))..)))))......((((((((((.....))))).((((.......))))........((((((((.((.((((.(((.....))).)))))).))))))))..((((((.....))))))..)"
offset: 0
construct_count: 1
data_points: 149
owner: "Ramya Rangan"
comments: |
    Preliminary data,  1 replicates
    RNA was heat to 90 C for 2 min and cool RT for 10 min, then incubated at 50 C for 20 min at pH 8.0 with 10 mM MgCl2 to aid folding.
    Additional sequences at 5' and 3' end not shown; two different flanking sequences were not used and averaged.
    Data are not normalized based on GAGUA pentaloops in flanking sequences (not shown).
    DMS, CMCT, and SHAPE not used normalized so that As, Us, or all 5 loop residues give mean reactivity of 1.0.
    Values are winsorized above 2 and below 0.
    Note:
    Taken in Feb 2020 for COVID19.
description: "SHAPE reactivity for SL1-4 in the 5'UTR of SARS-CoV-2"
annotation:
  processing: ["backgroundSubtraction", "overmodificationCorrection"]
  temperature: ["24C"]
  chemical: ["Na-HEPES:50mM(pH8.0)", "MgCl2:10mM"]
citation:
  authors: "Rangan R, Watkins AM, Chacon J, Kretsch R, Kladwang W, Zheludev IN, Townley J, Rynge M, Thain G, Das R"
  title:   "De novo 3D models of SARS-CoV-2 RNA elements from consensus experimental secondary structures"
  journal: "Nucleic acids research"
  year:    "2021"
  doi:     "10.1093/nar/gkab119"
  pubmed:  "33693814"
thumbnail: /assets/thumbnails/FWSL14_UTR_0003.png
rdat:      https://github.com/DasLab/rmdb.github.io/releases/download/data-general/FWSL14_UTR_0003.rdat
---
