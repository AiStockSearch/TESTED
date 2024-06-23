// Создать конечный автомат на JavaScript, который будет распознавать валидные телефонные номера в формате +7-9XX-XXX-XXXX.
const catalogNumber = (step: string) => ({
  0: step,
  1: step,
  2: step,
  3: step,
  4: step,
  5: step,
  6: step,
  7: step,
  8: step,
  9: step,
  default: 'error',
});
class PhoneNumberValidator {
  states: {
    q0: { '+': string; 8: string; 7: string; default: string };
    q1: { 7: string; default: string };
    q2: { '-': string; default: string };
    q3: { 9: string; 8: string; '-': string };
    q4: {
      default: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
    };
    q5: {
      default: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
    };
    q6: { '-': string; default: string };
    q7: {
      '-': string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      default: string;
    };
    q8: {
      '-': string;
      default: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
    };
    q9: {
      '-': string;
      default: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
    };
    q10: { '-': string; default: string };
    q11: {
      '-': string;
      default: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
    };
    q12: {
      '-': string;
      default: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
    };
    q13: {
      default: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
      '-': string;
    };
    q14: {
      '-': string;
      default: string;
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
      5: string;
      6: string;
      7: string;
      8: string;
      9: string;
    };
  };
  currentState: string;
  constructor() {
    this.states = {
      q0: {
        '+': 'q1',
        8: 'q2',
        7: 'q2',
        default: 'invalid',
      },
      q1: {
        7: 'q2',
        default: 'invalid',
      },

      q2: {
        '-': 'q3',
        default: 'invalid',
      },

      q3: {
        9: 'q4',
        8: 'q4',
        '-': 'invalid',
      },
      q4: {
        ...catalogNumber('q5'),
        default: 'invalid',
      },

      q5: {
        ...catalogNumber('q6'),
        default: 'invalid',
      },

      q6: {
        '-': 'q7',
        default: 'invalid',
      },

      q7: {
        ...catalogNumber('q8'),
        '-': 'invalid',
      },
      q8: {
        ...catalogNumber('q9'),
        '-': 'invalid',
        default: 'invalid',
      },

      q9: {
        ...catalogNumber('q10'),
        '-': 'invalid',
        default: 'invalid',
      },

      q10: {
        '-': 'q11',
        default: 'invalid',
      },
      q11: {
        ...catalogNumber('q12'),
        '-': 'invalid',
        default: 'invalid',
      },
      q12: {
        ...catalogNumber('q13'),
        '-': 'invalid',
        default: 'invalid',
      },
      q13: {
        '-': 'q14',
        ...catalogNumber('q14'),
        default: 'invalid',
      },
      q14: {
        ...catalogNumber('valid'),
        '-': 'invalid',
        default: 'invalid',
      },
    };
    this.currentState = 'q0';
  }

  validate(phoneNumber: string) {
    this.currentState = 'q0';
    for (let char of phoneNumber) {
      try {
        this.currentState = this.states[this.currentState][char] || 'invalid';
        if (this.currentState === 'invalid') {
          return false;
        }
      } catch (e) {}
    }
    return this.currentState === 'valid';
  }
}

export const phoneValidator = new PhoneNumberValidator();
