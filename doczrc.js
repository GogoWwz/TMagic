export default {
  title: 'TMagic',
  dest: '/doc',
  base: "/TMagic",
  typescript: true,
  description: "A simple and light-weight react UI library",
  // src: "./src",
  ignore: ["README.md"],
  themeConfig: {
    showPlaygroundEditor: true
  },
  menu: [
    "Start",
    {
      name: "Base",
      menu: ["Icon", "Button"]
    },
    {
      name: "Form",
      menu: ["Input", "Validator"]
    },
    {
      name: "Feedback",
      menu: ["Message"]
    },
    {
      name: "Navigation",
      menu: ["Menu"]
    }
  ]
};