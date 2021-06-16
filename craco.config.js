const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#0e1c81',
              '@border-radius-base': '0px',
              '@font-size-base': '16px',
              '@menu-dark-inline-submenu-bg': '#0e1c81',
              '@menu-dark-bg': '#0e1c81',
              '@text-color-dark': 'fade(@white, 90%)',
              '@text-color-secondary-dark': 'fade(@white, 90%)',
              '@menu-icon-size':'20px',
              '@menu-item-font-size':'20px'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};