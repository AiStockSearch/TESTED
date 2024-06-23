class NameValidator {
  states: {
    q0: { letterUpper: string };
    q1: { letterLower: string; letterUpper: string; space: string };
    q2: { letterUpper: string };
    q3: { letterLower: string; letterUpper: string };
  };
  currentState: string;
  constructor() {
    this.states = {
      q0: { letterUpper: 'q1' },
      q1: {
        letterLower: 'q1',
        letterUpper: 'q1',
        space: 'q2',
      },
      q2: { letterUpper: 'q3' },
      q3: {
        letterLower: 'q3',
        letterUpper: 'q3',
      },
    };
    this.currentState = 'q0';
  }

  validate(name: string) {
    this.currentState = 'q0';
    for (let i = 0; i < name.length; i++) {
      const char = name[i];
      if (/[A-Z]/.test(char)) {
        this.currentState = this.states[this.currentState]
          ? this.states[this.currentState]['letterUpper']
          : null;
      } else if (/[a-z]/.test(char)) {
        this.currentState = this.states[this.currentState]
          ? this.states[this.currentState]['letterLower']
          : null;
      } else if (char === ' ') {
        this.currentState = this.states[this.currentState]
          ? this.states[this.currentState]['space']
          : null;
      } else {
        this.currentState = null;
      }

      if (!this.currentState) {
        return false;
      }
    }
    return this.currentState === 'q1' || this.currentState === 'q3';
  }
}
// Примеры использования:

export const nameValidator = new NameValidator();
