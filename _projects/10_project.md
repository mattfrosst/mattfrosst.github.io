---
layout: page
title: PROBES I data; Stone et al. 2022
description: Here, you can download the PROBES I dataset, and read some further information on its contents and selection.
img: 
importance: 1
category: PROBES I
---

The PROBES I data, complied by <a href="https://ui.adsabs.harvard.edu/abs/2022ApJS..262...33S/abstract">Stone et. al. 2022</a>, can be easily downloaded at the following link:

<h3><a href="https://zenodo.org/records/10456320">Download PROBES I data</a></h3>

PROBES I contains extended rotation curves for 3163 late-type spirals, with matching homogeneous multi-band photometry for 1677 of them. Various files are found in the above download link. The raw data are given in the profiles.zip file. These .prof files contain the surface brightness profiles and rotation curves for each galaxy. The columns each profile are described in README_profiles. Also included are .aux files which give details of the photometry extraction with AutoProf.

The reduced data are contained in various .csv files. Each galaxy has a unique name which is given in the first column of each table. The file main_table.csv contains high level information about every galaxy including redshift, morphology, and which photometric bands are available. The model_fits.csv file contains fitting parameters for a number of parametric models which describeeither the rotation curves or surface brightness profiles. The structural_parameters.csv file contains structural parameters such as the effective radius or absolute magnitude for every galaxy which has the relevant data. The columns in each table are described in the README_tables file. 

If you use this data in your research, we request that you cite <a href="https://ui.adsabs.harvard.edu/abs/2022ApJS..262...33S/abstract">Stone et. al. 2022</a>, the bibtex for which can be found below:
{% raw %}
<pre><code>@ARTICLE{2022ApJS..262...33S,
       author = {{Stone}, Connor and {Courteau}, St{\'e}phane and {Arora}, Nikhil and {Frosst}, Matthew and {Jarrett}, Thomas H.},
        title = "{PROBES. I. A Compendium of Deep Rotation Curves and Matched Multiband Photometry}",
      journal = {\apjs},
     keywords = {Disk galaxies, Galaxy physics, Galaxy photometry, Galaxy kinematics, Galaxy structure, Catalogs, 391, 612, 611, 602, 622, 205, Astrophysics - Astrophysics of Galaxies},
         year = 2022,
        month = sep,
       volume = {262},
       number = {1},
          eid = {33},
        pages = {33},
          doi = {10.3847/1538-4365/ac83ad},
archivePrefix = {arXiv},
       eprint = {2209.09912},
 primaryClass = {astro-ph.GA},
       adsurl = {https://ui.adsabs.harvard.edu/abs/2022ApJS..262...33S},
      adsnote = {Provided by the SAO/NASA Astrophysics Data System}
}</code></pre>
{% endraw %}
