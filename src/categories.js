   export const categories = [
       {
           "name": "PTM",
           "label": "PTM",
           "trackType": "protvista-track",
           "adapter": "protvista-feature-adapter",
           "url": "https://www.ebi.ac.uk/proteins/api/features/",
           "tracks": [{
               "name": "mod_res",
               "label": "Modified residue",
               "filter": "MOD_RES",
               "trackType": "protvista-track",
               "tooltip": "Modified residues such as phosphorylation, acetylation, acylation, methylation"
           }, {
               "name": "carbohyd",
               "label": "Glycosylation",
               "filter": "CARBOHYD",
               "trackType": "protvista-track",
               "tooltip": "Covalently attached glycan group(s)"
           }, {
               "name": "disulfid",
               "label": "Disulfide bond",
               "filter": "DISULFID",
               "trackType": "protvista-track",
               "tooltip": "The positions of cysteine residues participating in disulphide bonds"
           }, {
               "name": "crosslnk",
               "label": "Cross-link",
               "filter": "CROSSLNK",
               "trackType": "protvista-track",
               "tooltip": "Covalent linkages of various types formed between two proteins or between two parts of the same protein"
           }, {
               "name": "lipid",
               "label": "Lipidation",
               "filter": "LIPID",
               "trackType": "protvista-track",
               "tooltip": "Covalently attached lipid group(s)"
           }]
       }
   ];