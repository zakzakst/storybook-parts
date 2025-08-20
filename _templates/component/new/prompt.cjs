const capitalize = (str) => {
  if (typeof str !== "string" || !str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: "select",
        name: "component_type",
        message: "コンポーネントタイプを入力してください",
        choices: [
          "accordion",
          "button",
          "card",
          // "carousel",
          "contact",
          // "faq",
          // "footer",
          // "form",
          "heading",
          "hero",
          // "loader",
          // "menu",
          "modal",
          "newsList",
          "other",
          "scrollAnim",
          // "section",
          "serviceList",
          // "startAnim",
          // "utility",
        ],
      },
      {
        type: "input",
        name: "number",
        message: "番号を入力してください",
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { component_type, number } = answers;
      const name = capitalize(component_type) + number;
      return { ...answers, name };
    });
  },
};
