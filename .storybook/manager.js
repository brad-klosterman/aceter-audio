import { addons } from '@storybook/addons';
import { create, themes } from '@storybook/theming';

const theme = create({
  base: 'dark', 

  colorPrimary: 'rgba(85, 154, 211, 1)',
  colorSecondary: 'rgba(79,193,255,1)',

  // UI
  // appBg: 'rgba(47,47,47,1)', // sidebar
  appBg: 'rgba(45,45,45,1)',  
  appContentBg: 'rgba(51,51,51,1)', // bottom drawer
  appBorderColor: 'grey', // bottom drawer border
  appBorderRadius: 0,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'silver',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'rgba(79,193,255,1)',
  barBg: 'rgba(51,51,51,1)',

  // Form colors
  inputBg: '#3f3f3f',
  inputBorder: '#3f3f3f',
  inputTextColor: 'silver',
  inputBorderRadius: 3,

  brandTitle: 'My custom storybook',
  brandUrl: 'https://example.com',
  brandImage: 'https://placehold.it/350x150',
});

addons.setConfig({
  isFullscreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  sidebarAnimations: true,
  enableShortcuts: true,
  isToolshown: false,
  theme: theme,
  selectedPanel: undefined,
  initialActive: 'sidebar',
  showRoots: false,
});