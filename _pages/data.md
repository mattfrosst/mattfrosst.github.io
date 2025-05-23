---
layout: page
title: data
permalink: /data/
description: 
nav: true
nav_order: 3
display_categories: [PROBES I, PROBES II]
horizontal: false
---
<a href="https://ui.adsabs.harvard.edu/abs/2022ApJS..262...33S/abstract">PROBES I</a> and <a href="https://ui.adsabs.harvard.edu/abs/2022MNRAS.514.3510F/abstract">PROBES II</a> are datasets containing the rotation curves (RCs) and surface brightness (SB) profiles of 3163 galaxies (primarily late-type spirals) and 716 galaxies (primarily dwarf galaxies and late-type spirals), respectively. Specifically, both datasets have high-quality HI and/or Halpha rotation curves (tracing the gravitational potential out to large radii) and at least one of photometry from SDSS and/or DESI-LIS (tracing the stellar mass distribution), with some galaxies also having associated GALEX or WISE photometry. There is some overlap in the two samples to allow for accurate comparisons of the data and the subsequent analysis. To date, the combined PROBES I + II dataset spans the broadest range in stellar masses (5 dex), surface brightnesses (>3 dex), and rotation curve shapes. On this webpage you can download the PROBES data and access our scientific publications.

If you are using data from this website in your scientific publications, please cite the <a href="https://ui.adsabs.harvard.edu/abs/2022ApJS..262...33S/abstract">PROBES I</a> and <a href="https://ui.adsabs.harvard.edu/abs/2022MNRAS.514.3510F/abstract">PROBES II</a> master papers. References to the original HI+Halpha rotation curves are given in the datasets, and we encourage you to also consider citing the original rotation-curve sources if relevant to your manuscript.

<!-- _pages/data.md -->
<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
