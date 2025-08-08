const colors = {
    // Primary Colors
    'cus-primary' : '#000',

    // Secondary Colors
    'cus-blue' : '#377DFF',
    'cus-green' : '#38CB89',
    'cus-orange' : '#FFAB00',
    'cus-red' : '#FF5630',

    // Neutral Colors
    natural : {
        1 : "#FEFEFE",
        2 : "#F3F5F7",
        3 : "#E8ECEF",
        4 : "#6C7275",
        5 : "#343839",
        6 : "#232627",
        7 : "#141718",
    }
}

const customClasses = {
  '.hero': {
    fontSize: '96px',
    lineHeight: '96px',
    letterSpacing: '-2%',
    fontWeight : '500'
  },
  '.headline-1': {
    fontSize: '80px',
    lineHeight: '84px',
    letterSpacing: '-3px',
    fontWeight : '500'
  },
  '.headline-2': {
    fontSize: '72px',
    lineHeight: '76px',
    letterSpacing: '-2px',
    fontWeight : '500'
  },
  '.headline-3': {
    fontSize: '54px',
    lineHeight: '58px',
    letterSpacing: '-1px',
    fontWeight : '500'
  },
  '.headline-4': {
    fontSize: '40px',
    lineHeight: '44px',
    letterSpacing: '-0.4px',
    fontWeight : '500'
  },
  '.headline-5': {
    fontSize: '34px',
    lineHeight: '38px',
    letterSpacing: '-0.6px',
    fontWeight : '500'
  },
  '.headline-6': {
    fontSize: '28px',
    lineHeight: '34px',
    letterSpacing: '-0.6px',
    fontWeight : '500'
  },
  '.headline-7': {
    fontSize: '20px',
    lineHeight: '28px',
    letterSpacing: '0px',
    fontWeight : '500'
  },
  '.body-1': {
    fontSize: '20px',
    lineHeight: '32px',
    letterSpacing: '0px',
  },
  '.body-1-semi': {
    fontSize: '20px',
    lineHeight: '32px',
    letterSpacing: '0px',
    fontWeight: '600',
  },
  '.body-1-bold': {
    fontSize: '20px',
    lineHeight: '32px',
    letterSpacing: '0px',
    fontWeight: '700',
  },
  '.body-2': {
    fontSize: '16px',
    lineHeight: '26px',
    letterSpacing: '0px',
  },
  '.body-2-semi': {
    fontSize: '16px',
    lineHeight: '26px',
    letterSpacing: '0px',
    fontWeight: '600',
  },
  '.body-2-bold': {
    fontSize: '16px',
    lineHeight: '26px',
    letterSpacing: '0px',
    fontWeight: '700',
  },
  '.caption-1': {
    fontSize: '14px',
    lineHeight: '22px',
    letterSpacing: '0px',
  },
  '.caption-1-semi': {
    fontSize: '14px',
    lineHeight: '22px',
    letterSpacing: '0px',
    fontWeight: '600',
  },
  '.caption-1-bold': {
    fontSize: '14px',
    lineHeight: '22px',
    letterSpacing: '0px',
    fontWeight: '700',
  },
  '.caption-2': {
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0px',
  },
  '.caption-2-semi': {
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0px',
    fontWeight: '600',
  },
  '.caption-2-bold': {
    fontSize: '12px',
    lineHeight: '20px',
    letterSpacing: '0px',
    fontWeight: '700',
  },
  '.hairline-1': {
    fontSize: '16px',
    lineHeight: '16px',
    letterSpacing: '0px',
    fontWeight: '700',
  },
  '.hairline-2': {
    fontSize: '12px',
    lineHeight: '12px',
    letterSpacing: '0px',
    fontWeight: '700',
  },
  '.button-xl': {
    fontSize: '26px',
    lineHeight: '38px',
    letterSpacing: '0px',
    fontWeight: '500'
  },
  '.button-l': {
    fontSize: '22px',
    lineHeight: '34px',
    letterSpacing: '0px',
    fontWeight: '500'
  },
  '.button-m': {
    fontSize: '18px',
    lineHeight: '32px',
    letterSpacing: '-0.4px',
    fontWeight: '500'
  },
  '.button-s': {
    fontSize: '16px',
    lineHeight: '28px',
    letterSpacing: '-0.4px',
    fontWeight: '500'
  },
  '.button-xs': {
    fontSize: '14px',
    lineHeight: '24px',
    letterSpacing: '0px',
    fontWeight: '500'
  },
  '.uni-pad': {
    '@apply px-6 md:px-10 lg:px-12 xl:px-14 2xl:px-16 3xl:px-20 4xl:px-0': {},
  },
  '.smooth-transition' : {
    transition : "all 0.6s cubic-bezier(0.30, 1, 0.36, 1)"
  }
}


export default {colors , customClasses}