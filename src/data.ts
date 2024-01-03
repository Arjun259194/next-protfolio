export const projectData = [
    {
        title: "Forg",
        description: "A simple file organizing script in rust",
        snippet: "/forg-snip.png",
        link: "https://github.com/Arjun259194/forg",
    },
    {
        title: "Author-Junction",
        description: "A web platform for small book authors to share there work",
        snippet: "/Auth-snip.png",
        link: "https://unique-pothos-1a2e40.netlify.app/",
    },

    {
        title: "Guess-the-game",
        description:
            "A guessing game for fiction lovers where they can guess the character name from a given dialog",
        snippet: "/Auth-snip.png",
        link: "https://guess-the-guy.vercel.app/",
    },
    {
        title: "Responsive-Admin-Dashboard-Using-HTML-CSS-JavaScript"
            .split("-")
            .join(" "),
        description:
            "A modern Dashboard visualizing and presenting data in a formal manner",
        snippet: "/dashboard-snip.png",
        link: "https://github.com/Arjun259194/Responsive-Admin-Dashboard-Using-HTML-CSS-JavaScript-with-Light-Dark-Mode",
    },
];

export type Project = (typeof projectData)[number];
