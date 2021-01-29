export default {
  title: 'TMagic',
  dest: '/doc',
  base: "/TMagic",
  typescript: true,
  description: "A simple and light-weight react UI library",
  ignore: ["README.md"],
  themeConfig: {
    // 是否默认展开代码显示区域
    showPlaygroundEditor: false,
    // 是否显示每页的edit page按钮
    showMarkdownEditButton: false,
    // 在标题中显示暗/亮模式开关切换
    showDarkModeSwitch: true,
    fonts: {
      monospace: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol','Noto Color Emoji' !default"
    }
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