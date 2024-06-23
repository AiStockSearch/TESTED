class EmailValidator {
  states: {
    q0: {
      letter: string;
      number: string;
      '.': string;
      _: string;
      '+': string;
      '-': string;
      '@': string;
    };
    q1: {
      letter: string;
      number: string;
      '.': string;
      _: string;
      '+': string;
      '-': string;
      '@': string;
    };
    q2: { letter: string; number: string };
    q3: { letter: string; number: string; '.': string };
    q4: { letter: string; number: string; '.': string; '-': string };
    q5: { letter: string; number: string };
  };
  currentState: string;
  constructor() {
    this.states = {
      q0: {
        letter: 'q1',
        number: 'q1',
        '.': 'q2',
        _: 'q1',
        '+': 'q1',
        '-': 'q1',
        '@': 'q3',
      },
      q1: {
        letter: 'q1',
        number: 'q1',
        '.': 'q2',
        _: 'q1',
        '+': 'q1',
        '-': 'q1',
        '@': 'q3',
      },
      q2: {
        letter: 'q1',
        number: 'q1',
      },
      q3: {
        letter: 'q4',
        number: 'q4',
        '.': 'q3',
      },
      q4: {
        letter: 'q4',
        number: 'q4',
        '.': 'q5',
        '-': 'q4',
      },
      q5: {
        letter: 'q4',
        number: 'q4',
      },
    };
    this.currentState = 'q0';
  }

  validate(email: string) {
    this.currentState = 'q0';
    let atFound = false;
    for (let i = 0; i < email.length; i++) {
      const char = email[i];
      const currentStateTransitions = this.states[this.currentState] as
        | { [key: string]: string }
        | undefined;
      if (/[a-zA-Z]/.test(char)) {
        this.currentState = currentStateTransitions?.letter || null;
      } else if (/[0-9]/.test(char)) {
        this.currentState = currentStateTransitions?.number || null;
      } else {
        this.currentState = currentStateTransitions?.[char] || null;
      }

      if (!this.currentState) {
        return false;
      }

      if (char === '@') {
        atFound = true;
      }

      // Additional checks for local part
      if (
        !atFound &&
        this.currentState === 'q2' &&
        (i === 0 || email[i + 1] === '.' || email[i + 1] === '@')
      ) {
        return false; // Consecutive dots or dot at the beginning/end of local part
      }

      // Additional checks for domain part
      if (
        atFound &&
        this.currentState === 'q5' &&
        (i === email.length - 1 || email[i + 1] === '.')
      ) {
        return false; // Consecutive dots or dot at the end of domain
      }
    }

    // Ensure that email contains '@' and does not end with '.'
    return atFound && this.currentState === 'q4';
  }
}
// Example usage:

export const emailValidator = new EmailValidator();
