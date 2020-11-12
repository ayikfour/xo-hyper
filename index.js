const black = 'rgb(20, 20, 20)';
const faded = 'rgba(255, 255, 255, 0.1)';

const ocGray9 = '#f8f9fa';
const ocGray8 = '#e9ecef';
const ocGray7 = '#dee2e6';
const ocGray6 = '#ced4da';
const ocGray5 = '#adb5bd';
const ocGray4 = '#868e96';
const ocGray3 = '#495057';
const ocGray2 = '#343a40';
const ocGray1 = '#212121';
const ocGray0 = '#fcfcfc';
// const ocGray0 = '#212529';

exports.decorateBrowserOptions = (defaults) =>
   Object.assign({}, defaults, {
      titleBarStyle: '',
      transparent: true,
      frame: false,
   });

exports.decorateConfig = (config) =>
   Object.assign({}, config, {
      backgroundColor: black,
      foregroundColor: ocGray7,
      selectionColor: faded,
      borderColor: black,
      cursorColor: ocGray9,
      colors: {
         black: ocGray1,
         red: ocGray7,
         green: ocGray6,
         yellow: ocGray5,
         blue: ocGray9,
         magenta: ocGray4,
         cyan: ocGray3,
         black,
         lightBlack: ocGray8,
         lightRed: ocGray7,
         lightGreen: ocGray6,
         lightYellow: ocGray5,
         lightBlue: ocGray9,
         lightMagenta: ocGray4,
         lightCyan: ocGray3,
         lightWhite: ocGray0,
      },
      css: `
    ${config.css}
    .hyper_main {
      border: none !important;
    }

    .header_header {
      color: ${ocGray9};
    }

    .header_windowHeaderWithBorder {
      border-color: ${black} !important;
    }

    .tabs_list {
      border-bottom: 1px solid ${ocGray2};
      margin-left: 0;
    }

    .tabs_borderShim {
      border-color: ${ocGray2} !important;
    }

    .tab_tab {
      border: 0;
    }

    .tab_tab.tab_active {
      background: ${black};
      color: ${ocGray9};
    }

    .tab_tab:not(.tab_active) {
      background: ${black};
      color: ${ocGray3};
    }

    .tab_tab:not(.tab_active):hover {
      color: ${ocGray9};
    }

    .tab_icon {
      top: 9px;
      width: 16px;
      height: 16px;
      color: ${ocGray9};
      border-radius: 3px;
      background-color: ${black};
    }

    .tab_icon:before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: ${ocGray7};
      -webkit-mask-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5IiBoZWlnaHQ9IjkiIHZpZXdCb3g9IjAgMCA5IDkiPjxwb2x5Z29uIGZpbGw9IiMwMDAwMDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgcG9pbnRzPSI0Ljk1IDQuMjQzIDguNDg1IC43MDcgNy43NzggMCA0LjI0MyAzLjUzNiAuNzA3IDAgMCAuNzA3IDMuNTM2IDQuMjQzIDAgNy43NzggLjcwNyA4LjQ4NSA0LjI0MyA0Ljk1IDcuNzc4IDguNDg1IDguNDg1IDcuNzc4Ii8+PC9zdmc+');
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-size: 9px;
      -webkit-mask-position: center;
      transition: background 150ms ease;
    }

    .tab_icon:hover {
      background-color: ${ocGray2} !important;
    }

    .tab_icon:hover::before {
      background-color: ${ocGray9};
    }

    .tab_shape {
      display: none;
    }

    .splitpane_divider {
      background-color: ${ocGray3} !important;
    }
  `,
   });
