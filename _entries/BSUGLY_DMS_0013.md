---
rmdb_id: "BSUGLY_DMS_0013"
permalink: /detail/BSUGLY_DMS_0013/
name: "Bacillus subtilis gcvT glycine riboswitch delta P0 variant, cotranscriptionally folded, 0 mM glycine"
category: "General"
date: 2025-05-20
creation_date: "05/20/25"
version: 1
sequence: "AGCAAGGGGAGAGACCUGACCGAAAACCUCGGGAUACAGGCGCCGAAGGAGCAAACUGCGGAGUGAAUCUCUCAGGCAAAAGAACUCUUGCUCGACGCAACUCUGGAGAGUGUUUGUGCGGAUGCGCAAACCACCAAAGGGGACGUCUUUGCGUAUGCAAAGUAAACUUUCAGGUGCCAGGACAGAGAACCUUCAUUUUACAUGAGGUGUUUCUCUGUCCUUUUUUGUAUCCUGAUUCGUCAGGCGAUGUGUGCUGGAAGACAUU"
structure: "........................................................................................................................................................................................................................................................................."
offset: 0
construct_count: 247
data_points: 35055
owner: "Eric Strobel"
comments: |
    Sequencing reads were demultiplexed by transcript length and channel using the TECtools cotrans_preprocessor script
    Neighboring transcript smoothing was applied
    Mutation mapping and reactivity calculation was performed using shapemapper2 (Busan and Weeks,  DOI: 10.1261/rna.061945.117)
    Reactivity values were normalized as described in section 3.2.1 of Low and Weeks, 2010, DOI: 10.1016/j.ymeth.2010.06.007
    The leading SC1 hairpin sequence (5-ATGGCCTTCGGGCCAA), which is masked by a primer, was trimmed
    Transcripts from 223 to 250 and after 254 were not enriched by template DNA strand biotin-streptavidin roadblocks and may be poor quality
    Data are from two independent replicates that were analyzed separately then merged and normalized
    True offset is -9, sequence begins at A10 due to deletion of the first 9 nucleotides
annotation:
  experiment: ["TECprobe-VL"]
  modifier: ["DMS"]
  temperature: ["37C"]
  chemical: ["Tris-HCl:100mM (pH8.0)", "KCl:50mM", "EDTA:0.1mM", "DTT:1mM", "MgCl2:10mM", "NTPs:50uM", "BSA:0.1mg/mL", "glycine:none"]
citation:
  authors: "Serena Teh and Eric J. Strobel"
  title:   ""
thumbnail: /assets/thumbnails/BSUGLY_DMS_0013.png
rdat:      https://github.com/DasLab/rmdb.github.io/releases/download/data-riboswitches/BSUGLY_DMS_0013.rdat
---
