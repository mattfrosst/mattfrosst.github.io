---
layout: page
title: PROBES I & II
permalink: /data/
description: 
nav: true
nav_order: 4
display_categories: [PROBES I, PROBES II]
horizontal: false
---

PROBES I and PROBES II are datasets of XXXX late-type galaxies (primarily spirals) and XXXX late-type and dwarf galaxies, respectively. Both datasets have SDSS and/or DESI photometry (tracing the stellar mass distribution) and high-quality HI and/or Halpha rotation curves (tracing the gravitational potential out to large radii). There is a moderate overlap in the two samples to allow for accurate comparisons of the data and the subsequent analysis. To this date, the combined PROBES I + II dataset spans the broadest range in stellar masses (5 dex), surface brightnesses (>3 dex), and rotation curve shapes. On this webpage you can download the PROBES data and access our scientific publications.

If you are using data from this website in your scientific publications, please cite the PROBES I and PROBES II master papers. References to the original HI+Halpha rotation curves are given in the datasets, and we suggest that you also consider citing the original rotation-curve sources if relevant to your publication.


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
