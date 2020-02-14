const currentDateUTC = new Date().toUTCString();

module.exports = {
  title: "akarisvisa",
  description: "A Travel Management and Visa Consultantancy Experts",
  dest: "./public",
  themeConfig: {
    repo: "https://wwww.github.com",
    repoLabel: "Repo",
    editLinks: false,
    editLinkText: "Found a bug? Help me improve this page!",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      { text: "Blog", link: "/blog/" },
      { text: "Archive", link: "/archive/" }
      //{ text: "RSS Feed", link: "/rss.xml/" }
    ],
    logo: "/logo.png",
    docsDir: "src",
    pageSize: 5,
    startPage: 0
  },
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "0EBPLP5ZDV", // UA-00000000-0,
        ga: "222587578",
        ga: "2568NR9TLL"
      }
    ],
    [
      "vuepress-plugin-rss",
      {
        base_url: "/",
        site_url: "https://akarisvisa.com", // required
        copyright: "2020 akarisvisa",

        filter: frontmatter => frontmatter.date <= new Date(currentDateUTC),
        count: 20
      }
    ],
    "vuepress-plugin-reading-time",
    "vuepress-plugin-janitor",
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: true
      }
    ]
  ],
  head: [
    [
      "link",
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon.png" }
    ],
    ["link", { rel: "icon", sizes: "32x32", href: "/favicon-32x32.png" }],
    ["link", { rel: "icon", sizes: "16x16", href: "/favicon-16x16.png" }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    [
      "link",
      { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" }
    ],
    ["meta", { name: "msapplication-TileColor", content: "#da532c" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    [
      "script",
      {
        "data-ad-client": "ca-pub-9166276194203789",
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      }
    ]
  ]
};
