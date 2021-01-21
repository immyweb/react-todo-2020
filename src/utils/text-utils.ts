const changeCase = require('change-case');

export const returnTextJustify = (alignment: any) => {
  const textJustify = changeCase.pascalCase(alignment);

  enum textJustifyConfig {
    FlexStart = 'left',
    FlexEnd = 'right',
    Center = 'center',
  }

  return textJustifyConfig[textJustify];
};
