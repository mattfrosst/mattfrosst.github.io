// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-about",
          title: "about",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/home/";
          },
        },{id: "nav-data",
          title: "data",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/data/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "Publications in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Here, you can find some selected experiences on my CV. You can also download a more detailed version by clicking the .pdf buttom above!",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-i-officially-began-my-phd-at-the-university-of-western-australia-under-the-supervison-of-danail-obreschkow-and-aaron-ludlow",
          title: 'I officially began my PhD at the University of Western Australia, under the...',
          description: "",
          section: "News",},{id: "news-i-obtained-my-phd-candidacy-at-the-university-of-western-australia-after-passing-panel-review-and-upon-the-recommendation-of-my-supervisors-and-colleagues",
          title: 'I obtained my PhD candidacy at the University of Western Australia, after passing...',
          description: "",
          section: "News",},{id: "news-new-article-the-active-role-of-co-evolving-haloes-in-stellar-bar-formation",
          title: 'New article - The active role of co-evolving haloes in stellar bar formation...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-travelling-to-eso-hq-from-march-1st-to-may-31st",
          title: 'Travelling to ESO HQ from March 1st to May 31st!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_5/";
            },},{id: "news-new-article-the-complex-relationship-between-black-hole-feedback-star-formation-and-stellar-bars-in-tng50",
          title: 'New article - The complex relationship between black hole feedback, star formation, and...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "projects-probes-i-data-stone-et-al-2022",
          title: 'PROBES I data; Stone et al. 2022',
          description: "Here, you can download the PROBES I dataset, and read some further information on its contents and selection.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/10_project/";
            },},{id: "projects-probes-ii-data-frosst-et-al-2022",
          title: 'PROBES II data; Frosst et al. 2022',
          description: "Here, you can download the PROBES II dataset, and read some further information on its contents and selection.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/11_project/";
            },},{id: "projects-data-analysis",
          title: 'data analysis',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-computational-and-programming-expertise",
          title: 'Computational and Programming Expertise',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-high-performance-and-parallel-computing",
          title: 'High-Performance and Parallel Computing',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "Machine Learning and Model Building",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-problem-solving-and-critical-thinking",
          title: 'Problem Solving and Critical Thinking',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-communication-and-collaboration-in-interdisciplinary-teams",
          title: 'Communication and Collaboration in Interdisciplinary Teams',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-what-are-the-best-scientific-colours",
          title: 'What are the best scientific colours?',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-scientific-ui-ux-design",
          title: 'Scientific UI/UX design',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%66%72%6F%73%73%74.%6D%61%74%74@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mattfrosst", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/matthew-frosst-720353266", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0003-3506-0858", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
