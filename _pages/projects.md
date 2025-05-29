---
layout: page
title: scientific colourmaps
permalink: /projects/
description: 
nav: true
nav_order: 3
display_categories: [sequential, divergiving, cyclic, gallery]
horizontal: false
---

Colour That Communicates

Effective data visualization begins with colourmaps that are perceptually fair, accessible, and reproducible. The colourmaps featured here are designed to:

- Represent data fairly: With perceptually uniform gradients, these maps avoid visual distortion and ensure that patterns in the data are represented honestly and intuitively.

- Support universal readability: Every palette has been tested for accessibility — they remain interpretable by those with colour vision deficiencies, in grayscale, and even when printed in black and white.

- Enable reproducibility: All colourmaps are permanently archived and versioned, making it easy to track updates, cite their use, and acknowledge contributors.

Whether you're building scientific plots, designing interfaces, or crafting dashboards, these colourmaps aim to enhance both clarity and trust in your data-driven work.


<!-- _pages/projects.md -->
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
