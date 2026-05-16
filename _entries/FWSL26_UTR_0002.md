---
rmdb_id: "FWSL26_UTR_0002"
permalink: /detail/FWSL26_UTR_0002/
name: "SL2-6_060320"
category: "General"
date: 2024-08-02
creation_date: "08/02/24"
version: 1
sequence: "GGGUCAGCGAGUAGCUGACAACGAUCUCUUGUAGAUCUGUUCUCUAAACGAACUUUAAAAUCUGUGUGGCUGUCACUCGGCUGCAUGCUUAGUGCACUCACGCAGUAUAAUUAAUAACUAAUUACUGUCGUUGACAGGACACGAGUAACUCGUCUAUCUUCUGCAGGCUGCUUACGGUUUCGUCCGUGUUGCAGCCGAUCAUCAGCACAUCUAGGUUUCGUCCGGGUGUGACCGAAAGGUAAGAUGGAGAGCCUUGUCCCUGGUUUCAACGAGAAAACACACGUCCAACUCAGUUUGCCUGUUUUACAGGUUCGCGACGUGAAGUCAGCGAGUAGCUGACAC"
structure: "..((((((.....))))))...(((((.....)))))........................((((((((.((.((((.(((.....))).)))))).))))))))......................(((((((((((..(((((...(((.(((((((.(((..((((((.(((((......)))))..))))))......)))(((((((.((......)))))))))(((....))).)))))))))).))))).))))...))))))).......((((((.......((..((((((...))))))..))))))))..((((((.....)))))).."
offset: 22
construct_count: 1
data_points: 342
owner: "Ramya Rangan"
comments: |
    Preliminary data, no replicates
    RNA folding protocol: add Na-HEPES pH8.0 to 50mM, RNA at 120nM, heat at 90C 3mins, RT 12mins, add MgCl2 to 10mM, heat at 50C 30mins, RT 12mins, 37C 12mins, add blank buffer, 37C 12mins, RT 5mins.
    RNA is derived from the SARS-CoV2 genome, Stem Loops 2 to 6 of the 5UTR, positions 44-343, 300nt. Flanked either side with 6bp stem with GAGUA reference pentaloop
    Data are normalized based on GAGUA pentaloops in flanking sequences.
    DMS and 1M7 normalized so that As, Us, or all 5 loop residues give mean reactivity of 1.0.
    Samples are normalized for attenuation with diluted data.
    Values are winsorized above 2 and below 0.
    Taken on 31st May 2020
description: "SHAPE reactivity for SL2-6 in the 5'UTR of SARS-CoV-2"
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
thumbnail: /assets/thumbnails/FWSL26_UTR_0002.png
rdat:      https://github.com/DasLab/rmdb.github.io/releases/download/data-general/FWSL26_UTR_0002.rdat
---
