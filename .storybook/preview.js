export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    options: {
        storySort: {
            method: "alphabetical",
            order: ["Introduction"],
        },
    },
    darkMode: {
        classTarget: "html",
        darkClass: "custom-dark-mode",
        stylePreview: true,
    },
};
