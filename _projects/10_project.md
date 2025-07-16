---
layout: data
title: PROBES I data; Stone et al. 2022
description: Here, you can download the PROBES I dataset, and read some further information on its contents and selection.
img: 
importance: 1
download_files:
  - name: probes_main_table.csv
    url: probes_main_table.csv
  - name: probes_files.zip
    url: probes_files.zip
category: PROBES I
---

The **PROBES I** dataset, compiled by [Stone et al. (2022)](https://ui.adsabs.harvard.edu/abs/2022ApJS..262...33S/abstract), can be downloaded using the buttons above.

**PROBES I** provides extended rotation curves for **3,163 late-type spiral galaxies**, with accompanying homogeneous multi-band photometry available for **1,677** of them. This compilation supports a wide range of galaxy dynamics and structural studies at scale.

---

### Data Contents

- **`profiles.zip`**: Contains raw `.prof` files for each galaxy, including surface brightness profiles and rotation curves. Column descriptions can be found in the `README_profiles` file.
- **`.aux` files**: Supplementary files containing details of the photometry extraction performed with **AutoProf**.

- **`probesI_main_table.csv`**: A master table providing key information for each galaxy, such as redshift, morphology, and available photometric bands.
- **`model_fits.csv`**: Contains fitting parameters for a range of parametric models applied to both rotation curves and surface brightness profiles.
- **`structural_parameters.csv`**: Lists structural properties (e.g., effective radius, absolute magnitudes) for each galaxy with sufficient data.

- **`probesI_files.zip`**: A collection of individual profile files and additional data products.

Column definitions for all `.csv` tables are provided in the `README_tables` file. Each galaxy is identified by a unique name, which appears in the first column of each table, allowing for consistent cross-referencing across files.

---

If you need guidance on how to use these data products, or how the parametric fits were performed, refer to the full documentation included in the download packages.

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
