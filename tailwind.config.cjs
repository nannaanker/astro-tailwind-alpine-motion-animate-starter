/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],

    theme: {
        extend: {



            fontFamily: {

                'roboto': ['"Roboto", sans-serif;'],
                'grotesk': ['"grotesk", sans-serif;'],
                

                
                },

                fontSize: {
                    'xs':'15px',
                    's':'20px',
                    'm':'26px',
                    'l':'40px',
                    'xl':'60px',
                    '2xl':'80px',
                    '3xl':'128px',
                    '4xl':'188px',
                  },


                spacing: {
                    
                    'xxs':'4px',
                    'xs':'8px',
                    's':'16px',
                    'm':'24px',
                    'l':'32px',
                    'xl':'40px',
                    '2xl':'48px',
                    '3xl':'56px',
                    '4xl':'64px',
                    '5xl':'72px',
                    '6xl':'80px',
                    '7xl':'88px',
                    '8xl':'96px',
                    '9xl':'140px',
                    '10xl':'260px',

                    '890':'890px',
                    '700':'700px',
                    '900':'900px',
                    '1052':'1052px',
    
                  },
                

            colors: {
                'red': {
                    50:'#FFEEEB',
                    100:'#FFDAD2',
                    200:'#FFB4A3',
                    300:'#FF8F75',
                    400:'#FF6847',
                    500:'#FF461C',
                    600:'#E02A00',
                    700:'#A81F00',
                    800:'#701400',
                    900:'#380A00',
                    950:'#1F0600',
                },

                    'blue': {
                        50:'#ECF2FE',
                        100:'#D9E5FD',
                        200:'#AEC7FA',
                        300:'#87ADF7',
                        400:'#5B8FF5',
                        500:'#3274F2',
                        600:'#0F53DD',
                        700:'#0B3FA8',
                        800:'#07296E',
                        900:'#04163A',
                        950:'#020B1D',
                    },

                        'orange': {
                            50:'#FFF4F1',
                            100:'#FEEAE1',
                            200:'#FED1BD',
                            300:'#FEBC9F',
                            400:'#FDA37C',
                            500:'#FD8C5C',
                            600:'#FC5C16',
                            700:'#CF4003',
                            800:'#882A02',
                            900:'#471601',
                            950:'#230B00',
                        },

                            'yellow': {
                                50:'#FFFEF0',
                                100:'#FFFCDB',
                                200:'#FFF9BC',
                                300:'#FFF799',
                                400:'#FFF476',
                                500:'#FFF053',
                                600:'#FFEB10',
                                700:'#CCBB01',
                                800:'#8A7E00',
                                900:'#423D00',
                                950:'#232100',
                            },

                                'sennep': {
                                    50:'#FFF9E5',
                                    100:'#FFF3CC',
                                    200:'#FFE89E',
                                    300:'#FFDC6B',
                                    400:'#FFD138',
                                    500:'#FFC606',
                                    600:'#D1A002',
                                    700:'#9E7900',
                                    800:'#6B5200',
                                    900:'#332700',
                                    950:'#191400',
                                },
    


            }
        }
    },
  };