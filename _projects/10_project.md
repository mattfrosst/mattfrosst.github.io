---
layout: page
title: PROBES I data; Stone et al. 2022
description: Here, you can download the PROBES I dataset, and read some further information on its contents and selection.
img: 
importance: 1
category: PROBES I
---

The PROBES I data, complied by <a href="https://ui.adsabs.harvard.edu/abs/2022ApJS..262...33S/abstract">Stone et. al. 2022</a>, can be easily downloaded at the following link:

<a href="https://zenodo.org/records/10456320">PROBES I data</a>

PROBES I contains extended rotation curves for 3163 late-type spirals, with matching homogeneous multi-band photometry for 1677 of them. Various files are found in the above download link. The raw data are given in the profiles.zip file. These .prof files contain the surface brightness profiles and rotation curves for each galaxy. The columns each profile are described in README_profiles. Also included are .aux files which give details of the photometry extraction with AutoProf.

The reduced data are contained in various .csv files. Each galaxy has a unique name which is given in the first column of each table. The file main_table.csv contains high level information about every galaxy including redshift, morphology, and which photometric bands are available. The model_fits.csv file contains fitting parameters for a number of parametric models which describeeither the rotation curves or surface brightness profiles. The structural_parameters.csv file contains structural parameters such as the effective radius or absolute magnitude for every galaxy which has the relevant data. The columns in each table are described in the README_tables file. 

If you use this data in your research, we request that the cite <a href="https://ui.adsabs.harvard.edu/abs/2022ApJS..262...33S/abstract">Stone et. al. 2022</a>, for which the bibtex located below:
    ---
    @ARTICLE{2022MNRAS.514.3510F,
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
      }
    ---


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images.
Say you wanted to write a little bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
