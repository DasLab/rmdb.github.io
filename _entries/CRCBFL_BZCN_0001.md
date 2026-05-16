---
rmdb_id: "CRCBFL_BZCN_0001"
permalink: /detail/CRCBFL_BZCN_0001/
name: "Bacillus cereus crcB fluoride riboswitch, cotranscriptionally folded, 0 mM fluoride"
category: "General"
date: 2023-02-13
creation_date: "02/13/23"
version: 1
sequence: "UUAUAGGCGAUGGAGUUCGCCAUAAACGCUGCUUAGCUAAUGACUCCUACCAGUAUCACUACUGGUAGGAGUCUAUUUUUUUGAGCAAGCUACCUGAUUCGUCAGGCGAUGUGUGCUGGAAGACAUU"
structure: "..............................................................................................................................."
offset: 0
construct_count: 109
data_points: 7938
owner: "Eric Strobel"
comments: |
    Sequencing reads were demultiplexed by transcript length and channel using the TECtools cotrans_preprocessor script
    Neighboring transcript smoothing was applied
    Mutation mapping and reactivity calculation was performed using shapemapper2 (Busan and Weeks,  DOI: 10.1261/rna.061945.117)
    Reactivity values are raw backround-subtracted mutations rates
    The leading SC1 hairpin sequence (5-ATGGCCTTCGGGCCAA), which is masked by a primer, was trimmed
    Transcripts from 85 to 112 and after 116 were not enriched by template DNA strand biotin-streptavidin roadblocks and may be poor quality
    Data are from two independent replicates that were concatenated prior to analysis
annotation:
  experiment: ["TECprobe-ML"]
  modifier: ["BzCN"]
  temperature: ["37C"]
  chemical: ["Tris-HCl:20mM (pH8.0)", "KCl:50mM", "EDTA:0.1mM", "DTT:1mM", "MgCl2:10mM", "NTPs:100uM", "BSA:0.1mg/mL", "NaF:none"]
citation:
  authors: "Courtney E. Szyjka and Eric J. Strobel"
  title:   ""
thumbnail: /assets/thumbnails/CRCBFL_BZCN_0001.png
rdat:      https://github.com/DasLab/rmdb.github.io/releases/download/data-general/CRCBFL_BZCN_0001.rdat
---
