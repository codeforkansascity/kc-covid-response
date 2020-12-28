module.exports = {
  theme: {
    extend: {
      colors: {
        'comebackkc-darkblue': '#1E2857',
        'comebackkc-red': '#D9353F',
        'comebackkc-black': '#2D2C2B',
        'comebackkc-gray': '#A4b3B7',
        'comebackkc-dark-gray': '#394759',
        'comebackkc-light-gray': '#E6E7E8'
      },
      height: {
        '28': '7rem',
        '72': '18rem',
        'screen-60': '60vh'
      },
      width: {
        '28': '7rem'
      },
      inset: {
        '20': '5rem',
        '32': '8rem',
        '64': '16rem',
        '72': '18rem',
        '76': '19rem',
        '-16': '-4rem',
        '-32': '-8rem',
        '-64': '-16rem',
        '1/2': '50%'
      },
      zIndex: {
        '-10': '-10'
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
        '9xl': '7rem',
        '10xl': '8rem'
      },
      fontFamily: {
        sans: [
          'Montserrat',
          'Helvetica Neue',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        heading: ['raleway']
      },
      screens: {
        widescreen: { raw: '(min-aspect-ratio: 16/9)' },
        narrowscreen: { raw: '(max-aspect-ratio: 16/9)' }
      }
    }
  }
}
