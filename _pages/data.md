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
<a href="https://ui.adsabs.harvard.edu/abs/2022ApJS..262...33S/abstract">PROBES I</a> and <a href="https://ui.adsabs.harvard.edu/abs/2022MNRAS.514.3510F/abstract">PROBES II</a> are datasets of 3163 galaxies (primarily late-type spirals) and 716 galaxies (an expanded sample of dwarf galaxies), respectively. Both datasets have SDSS, DESI-LIS, GALEX, and/or WISE photometry (tracing the stellar mass distribution) and high-quality HI and/or Halpha rotation curves (tracing the gravitational potential out to large radii). There is some overlap in the two samples to allow for accurate comparisons of the data and the subsequent analysis. To date, the combined PROBES I + II dataset spans the broadest range in stellar masses (5 dex), surface brightnesses (>3 dex), and rotation curve shapes. On this webpage you can download the PROBES data and access our scientific publications.

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
  <p class="card-text">
  {% case project.title %}
    {% when "PROBES I" %}
      Studying the structural and dynamical properties of bars in cosmological simulations.
    {% when "PROBES II" %}
      Analysis of gas dynamics and star formation thresholds in thin disc galaxies.
    {% when "Mock Observations of Edge-on Bars" %}
      Creating synthetic images to compare simulation data with real galaxy surveys.
    {% else %}
      More data coming soon...
  {% endcase %}
  </p>

  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
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
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
