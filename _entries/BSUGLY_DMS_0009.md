---
rmdb_id: "BSUGLY_DMS_0009"
permalink: /detail/BSUGLY_DMS_0009/
name: "Bacillus subtilis gcvT glycine riboswitch A76G variant, cotranscriptionally folded, 0 mM glycine"
category: "General"
date: 2025-05-20
creation_date: "05/20/25"
version: 1
sequence: "GAAAAUAUGAGCGAAUGACAGCAAGGGGAGAGACCUGACCGAAAACCUCGGGAUACAGGCGCCGAAGGAGCAAACUGCGGAGUGAGUCUCUCAGGCAAAAGAACUCUUGCUCGACGCAACUCUGGAGAGUGUUUGUGCGGAUGCGCAAACCACCAAAGGGGACGUCUUUGCGUAUGCAAAGUAAACUUUCAGGUGCCAGGACAGAGAACCUUCAUUUUACAUGAGGUGUUUCUCUGUCCUUUUUUGUAUCCUGAUUCGUCAGGCGAUGUGUGCUGGAAGACAUU"
structure: "............................................................................................................................................................................................................................................................................................"
offset: 10
construct_count: 266
data_points: 40280
owner: "Eric Strobel"
comments: |
    Sequencing reads were demultiplexed by transcript length and channel using the TECtools cotrans_preprocessor script
    Neighboring transcript smoothing was applied
    Mutation mapping and reactivity calculation was performed using shapemapper2 (Busan and Weeks,  DOI: 10.1261/rna.061945.117)
    Reactivity values were normalized as described in section 3.2.1 of Low and Weeks, 2010, DOI: 10.1016/j.ymeth.2010.06.007
    The leading SC1 hairpin sequence (5-ATGGCCTTCGGGCCAA), which is masked by a primer, was trimmed
    Transcripts from 232 to 259 and after 263 were not enriched by template DNA strand biotin-streptavidin roadblocks and may be poor quality
    Data are from two independent replicates that were analyzed separately then merged and normalized
annotation:
  experiment: ["TECprobe-VL"]
  modifier: ["DMS"]
  temperature: ["37C"]
  chemical: ["Tris-HCl:100mM (pH8.0)", "KCl:50mM", "EDTA:0.1mM", "DTT:1mM", "MgCl2:10mM", "NTPs:50uM", "BSA:0.1mg/mL", "glycine:none"]
citation:
  authors: "Serena Teh, Courtney E. Szyjka,and Eric J. Strobel"
  title:   ""
thumbnail: /assets/thumbnails/BSUGLY_DMS_0009.png
rdat:      https://github.com/DasLab/rmdb.github.io/releases/download/data-riboswitches/BSUGLY_DMS_0009.rdat
---
