/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    fontFamily: {
      body: ' niveau-grotesk',
      display: 'roc-grotesk',
    },
    container: false,
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {
      colors: {
        primary: '#111',
        accent: 'blue',
        bg: '#fff',
        selection: '#000',
        subtle: '#f8f8f8'
      },
      backgroundColor: {
        subtle: '#222',
        white: '#fff'
      },
      textColor: {
        grey: '#999',
        white: '#fff'
      },
      borderColor: {
        grey: '#ececec'
      }
    }
  },
  variants: {},
  plugins: [
    plugin(function ({
      addBase,
      config
    }) {
      addBase({
        '::selection': {
          backgroundColor: config('theme.colors.selection'),
          color: '#fff'
        },
        'body': {
          backgroundColor: config('theme.colors.bg'),
          color: config('theme.colors.primary'),
          fontFamily: config('theme.fontFamily.body'),
          fontWeight: '400',
          fontSize: '1.125rem'
        },
        'p': {
          marginBottom: '1rem',
        },
        'h1': {
          fontSize: config('theme.fontSize.h1'),
          fontFamily: config('theme.fontFamily.display'),
          fontWeight: '600',
          fontSize: '1.5rem',
          '@screen md': {
            fontSize: '3rem'
          }
        },
        'h2': {
          fontSize: config('theme.fontSize.h2'),
          fontFamily: config('theme.fontFamily.display'),
          fontWeight: '600',
          fontSize: '1.25rem',
          '@screen md': {
            fontSize: '2rem'
          },
          '@screen lg': {
            fontSize: '2.25rem'
          }
        },
        'h3': {
          fontSize: config('theme.fontSize.h3'),
          fontFamily: config('theme.fontFamily.display'),
          fontWeight: '600',
          fontSize: '1.5rem',
          '@screen md': {
            fontSize: '1.75rem'
          },
          '@screen lg': {
            fontSize: '2.25rem'
          }
        },
        'h4': {
          fontSize: config('theme.fontSize.h4'),
          fontFamily: config('theme.fontFamily.display'),
          fontWeight: '600',
          fontSize: '1.25rem',
          '@screen md': {
            fontSize: '1.5rem'
          },
          '@screen lg': {
            fontSize: '2rem'
          }
        },
        'h5': {
          fontSize: config('theme.fontSize.h5'),
          fontFamily: config('theme.fontFamily.display'),
          fontWeight: '600',
          fontSize: '1rem',
          '@screen md': {
            fontSize: '1.25rem'
          },
          '@screen lg': {
            fontSize: '1.5rem'
          }
        },
        'h6': {
          fontSize: config('theme.fontSize.h6'),
          fontFamily: config('theme.fontFamily.display'),
          fontWeight: '600',
          fontSize: '0.875rem',
          '@screen md': {
            fontSize: '0.975rem'
          },
          '@screen lg': {
            fontSize: '1rem'
          }
        },
      })
    }),
    function ({
      addComponents
    }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          '@screen sm': {
            maxWidth: '600px',
          },
          '@screen md': {
            maxWidth: '400px',
          },
          '@screen lg': {
            maxWidth: '400px',
          },
          '@screen xl': {
            maxWidth: '55vw',
          },
        }
      })
    }
  ]
}