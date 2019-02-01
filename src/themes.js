import variables from './sass/_variables.scss';
import logo from './logo.svg'
import logoAlt from './logo-alt.svg';

export const themes = {
    default: {
      spinnerColor: variables.spinnerColor,
      headerBackgroundColor: variables.headerBackgroundColor,
      headerForeColor: variables.headerForeColor,
      mainBackgroundColor: variables.mainBackgroundColor,
      mainForeColor: variables.mainForeColor,
      footerBackgroundColor: variables.footerBackgroundColor,
      footerForeColor: variables.footerForeColor,
      logo
    },
    alternative: {
      spinnerColor: variables.spinnerColorAlt,
      headerBackgroundColor: variables.headerBackgroundColorAlt,
      headerForeColor: variables.headerForeColorAlt,
      mainBackgroundColor: variables.mainBackgroundColorAlt,
      mainForeColor: variables.mainForeColorAlt,
      footerBackgroundColor: variables.footerBackgroundColorAlt,
      footerForeColor: variables.footerForeColorAlt,
      logo: logoAlt
    }
  };