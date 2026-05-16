---
rmdb_id: "COVID_FSE_0603"
permalink: /detail/COVID_FSE_0603/
name: "FSE-WT-CM-pH8_060320"
category: "General"
date: 2024-08-02
creation_date: "08/02/24"
version: 1
sequence: "GGUCAGCGAGUAGCUGACGUUUUUAAACGGGUUUGCGGUGUAAGUGCAGCCCGUCUUACACCGUGCGGCACAGGCACUAGUACUGAUGUCGUAUACAGGGCUUUUGGUCAGCGAGUAGCUGAC"
structure: ".((((((.....))))))...............(((((((((((...[[[[[[[)))))))))))((((((((.........))).)))))...]].]]]]]....((((((.....))))))"
offset: -18
construct_count: 1
data_points: 246
owner: "Ivan Zheludev"
comments: |
    Preliminary data, no replicates
    RNA folding protocol: add NaHEPES pH8.0 to 50mM, RNA at 120nM, heat at 90C 3mins, RT 12mins, add MgCl2 to 10mM, heat at 50C 30mins, RT 12mins, 37C 12mins, add blank buffer, 37C 12mins, RT 5mins.
    RNA is derived from the SARS-CoV2 genome, Frame Shifting Element (FSE), positions 13459-13546, 88nt. Flanked either side with 6bp stem with GAGUA reference pentaloop
    Data are normalized based on GAGUA pentaloops in flanking sequences.
    DMS and 1M7 normalized so that As, Us, or all 5 loop residues give mean reactivity of 1.0.
    Samples are normalized for attenuation with diluted data.
    Taken on 31st May 2020
description: "'Preliminary data, no replicates', ...
    'RNA folding protocol: add NaHEPES pH8.0 to 50mM, RNA at 120nM, heat at 90C 3mins, RT 12mins, add MgCl2 to 10mM, heat at 50C 30mins, RT 12mins, 37C 12mins, add blank buffer, 37C 12mins, RT 5mins. ', ...
    'RNA is derived from the SARS-CoV2 genome, Frame Shifting Element (FSE), positions 13459-13546, 88nt. Flanked either side with 6bp stem with GAGUA reference pentaloop', ...
    'Data are normalized based on GAGUA pentaloops in flanking sequences.', ...
    'DMS and 1M7 normalized so that As, Us, or all 5 loop residues give mean reactivity of 1.0.', ...
    'Samples are normalized for attenuation with diluted data.', ...
    'Taken on 31st May 202"
annotation:
  processing: ["backgroundSubtraction", "overmodificationCorrection"]
  temperature: ["24C"]
  chemical: ["Na-HEPES:50mM(pH8.0)", "MgCl2:10mM"]
citation:
  authors: "Zhang K, Zheludev IN, Hagey RJ, Haslecker R, Hou YJ, Kretsch R, Pintilie GD, Rangan R, Kladwang W, Li S, Wu MT, Pham EA, Bernardin-Souibgui C, Baric RS, Sheahan TP, D'Souza V, Glenn JS, Chiu W, Das R"
  title:   "Cryo-EM and antisense targeting of the 28-kDa frameshift stimulation element from the SARS-CoV-2 RNA genome"
  journal: "Nature structural & molecular biology"
  year:    "2021"
  doi:     "10.1038/s41594-021-00653-y"
  pubmed:  "34426697"
thumbnail: /assets/thumbnails/COVID_FSE_0603.png
rdat:      https://github.com/DasLab/rmdb.github.io/releases/download/data-rna-structures/COVID_FSE_0603.rdat
---
