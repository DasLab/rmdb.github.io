---
rmdb_id: "ECOSRP_BZCN_0001"
permalink: /detail/ECOSRP_BZCN_0001/
name: "E. coli signal recognition particle RNA, cotranscriptionally folded"
category: "General"
date: 2024-10-14
creation_date: "10/14/24"
version: 1
sequence: "GCGCGUUGGUUCUCAACGCUCUCAAUGGGGGCUCUGUUGGUUCUCCCGCAACGCUACUCUGUUUACCAGGUCAGGUCCGGAAGGAAGCAGCCAAGGCAGAUGACGCGUGUGCCGGGAUGUAGCUGGCAGGGCCCCCACCCAUUUCUGCCUCCCACCGUUUCGUCAAAAAACCUGAUUCGUCAGGCGAUGUGUGCUGGAAGACAUU"
structure: "............................................................................................................................................................................................................."
offset: 0
construct_count: 187
data_points: 20925
owner: "Eric Strobel"
comments: |
    Sequencing reads were demultiplexed by transcript length and channel using the TECtools cotrans_preprocessor script
    Neighboring transcript smoothing was applied
    Mutation mapping and reactivity calculation was performed using shapemapper2 (Busan and Weeks,  DOI: 10.1261/rna.061945.117)
    Reactivity values were normalized as described in section 3.2.1 of Low and Weeks, 2010, DOI: 10.1016/j.ymeth.2010.06.007
    The leading SC1 hairpin sequence (5-ATGGCCTTCGGGCCAA), which is masked by a primer, was trimmed
    Transcripts from 163 to 190 and after 194 were not enriched by template DNA strand biotin-streptavidin roadblocks and may be poor quality
    COMMENT=Data are from three independent replicates that were merged following analysis
annotation:
  experiment: ["TECprobe-VL"]
  modifier: ["BzCN"]
  temperature: ["37C"]
  chemical: ["Tris-HCl:20mM (pH8.0)", "KCl:50mM", "EDTA:0.1mM", "DTT:1mM", "MgCl2:10mM", "NTPs:50uM", "BSA:0.1mg/mL"]
citation:
  authors: "Courtney E. Szyjka, Skyler L. Kelly, and Eric J. Strobel"
  title:   ""
thumbnail: /assets/thumbnails/ECOSRP_BZCN_0001.png
rdat:      https://github.com/DasLab/rmdb.github.io/releases/download/data-general/ECOSRP_BZCN_0001.rdat
---
