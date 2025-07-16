---
layout: data
title: PROBES II data; Frosst et al. 2022
description: Here, you can download the PROBES II dataset, and read some further information on its contents and selection.
img:
importance: 2
download_files:
  - name: probes2_main_table.csv
    url: probes2_main_table.csv
  - name: probes2_files.zip
    url: probes2_files.zip
category: PROBES II
---

The **PROBES II** data, complied by <a href="https://ui.adsabs.harvard.edu/abs/2022MNRAS.514.3510F/abstract">Frosst et. al. 2022</a>, can be downloaded using the buttons above.

**PROBES II** comprises all spatially resolved rotation curves (RCs) of low-mass galaxies—specifically dwarfs and low surface brightness (LSB) systems—available to us at the time of compilation. While the dataset was initially designed to address the scarcity of such low-mass galaxies, it also includes more massive systems for completeness. In total, the compilation contains **631 late-type galaxies (LTGs)** drawn from **25 different sources**, spanning the full range of LTG Hubble types. Of these, **356 galaxies** have both RCs and photometry in at least three optical bands: either **g, r, z** from **DESI** (317 galaxies), or **g, r, i** from **SDSS DR7** (39 galaxies).

---

### Data Contents
- **`probes2_main_table.csv`**: Contains basic information for each source, including distance, inclination, ellipticity, and various mass measurements, among others.
- **`probes2_files.zip`** contains the following:
  - **`LightProfiles`**: Raw `.csv` files with radial surface brightness profiles in various bands.
  - **`RotationCurves`**: Raw `.csv` files with radial RC profiles for various sources.
  - **`global_properties_XXX.csv`**: Provides derived structural properties (e.g., effective radius, absolute magnitudes) in each band, along with gas and velocity-related quantities.
  - **`block_list.txt`**: Lists galaxy IDs excluded due to issues such as:
    - Missing inclination measurements
    - Insufficient DESI photometry to estimate stellar mass
    - Unreliable or unmeasurable RC inner slopes
    -  Photometric problems (e.g., edge-on orientation, interactions, foreground contamination, bleeding, cosmic rays)

Most systems on the block list are excluded because they are too edge-on to derive reliable surface brightness or mass profiles, based on visual inspection. Whether to include these galaxies depends on your specific use case.

Some galaxies appear more than once, with RCs sourced from multiple studies. These can be compared directly to assess consistency across sources or combined into a single RC as appropriate for your analysis.

---

### Reference

If you use this data in your research, we request that you cite <a href="https://ui.adsabs.harvard.edu/abs/2022MNRAS.514.3510F/abstract">Frosst et. al. 2022</a>, the bibtex for which can be found below:
{% raw %}
<pre><code>@ARTICLE{2022MNRAS.514.3510F,
       author = {{Frosst}, Matthew and {Courteau}, St{\'e}phane and {Arora}, Nikhil and {Stone}, Connor and {Macci{\`o}}, Andrea V. and {Blank}, Marvin},
        title = "{The diversity of spiral galaxies explained}",
      journal = {\mnras},
     keywords = {galaxies: haloes, galaxies: kinematics and dynamics, galaxies: structure, Astrophysics - Astrophysics of Galaxies},
         year = 2022,
        month = aug,
       volume = {514},
       number = {3},
        pages = {3510-3531},
          doi = {10.1093/mnras/stac1497},
archivePrefix = {arXiv},
       eprint = {2204.02412},
 primaryClass = {astro-ph.GA},
       adsurl = {https://ui.adsabs.harvard.edu/abs/2022MNRAS.514.3510F},
      adsnote = {Provided by the SAO/NASA Astrophysics Data System}
}</code></pre>
{% endraw %}
