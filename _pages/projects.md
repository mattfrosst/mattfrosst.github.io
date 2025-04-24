---
layout: page
title: about
permalink: /projects/
description: A few more details about me, and the things I've been up to.
nav: true
nav_order: 2
display_categories: [work, fun]
horizontal: false

profile:
  align: right
  image: MF_headshot.png
  image_circular: false # crops the image to make it circular
  more_info: >
    <p>Perth, WA, Australia</p>
---

Hi, I’m Matthew Frosst, a third-year PhD candidate in computational astrophysics at the University of Western Australia (UWA), and International Centre for Radio Astronomy Research (ICRAR). I’m interested in how high-performace supercomputing can used to study galaxy formation and evolution. In my research, I apply time-tested emperical and analytical tools, as well as recent advances in data analysis, machine learning, and statistical modelling.

I have extensive experience leading national and international collaborations, and applying advanced computational techniques to extract meaningful insights from complex datasets. Prior to joining ICRAR/UWA, I attended Queen’s University in Kingston, Canada, where I obtained my MSc and BScH in Physics, and worked part-time as a Data Scientist with the Physics, Engineering Physics, and Astronomy Department. In the future, I hope to leverage my advanced computational skilles to efficiently drive data-driven decision-making in the fields of astrophysics and data analytics.

Throughout my PhD I’ve served as the PhD Candidate Representitive to the ICRAR Senior Staff, ICRAR DEI Student Representitive, and as the Computational-Theory Group Chair. I've also participated annually in various outreach events, including Astrofest (the largest astronomy festival in Australia) and the Stargirls+ STEM camp.

Born in Canada’s national capital region, I enjoy skiing, ice hockey, and, of course, maple taffy. In Australia, I’ve had to forego the snow, and have taken up surfing and rock climbing. I’m currently training for a Ironman 70.3 triathalon. When not participating in sports, I’m an avid reader of science fiction, fantasy, and classical fiction.


<!-- pages/projects.md -->
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
