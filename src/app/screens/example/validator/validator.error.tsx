import * as R from 'ramda';
import { phoneValidator } from './validator.phone';
import { emailValidator } from './validator.email';
import { nameValidator } from './validator.name';

export const validateInputName = (item: any, state: string, currentState: any, route: any) => {
  let disabled = true;
  if (state === 'q0') {
    disabled = false;
  }
  if (!R.isEmpty(currentState)) {
    disabled = false;
  }

  const inputName = (element: any) =>
    R.pipe(R.path(['input', 'name']), R.defaultTo(''))(element) as string;

  if (R.hasPath(['input'])(item) && 'q9' === state) {
    item.input.forEach((element: string) => {
      const inputFields = R.path(['params', inputName(element)])(route);
      const inputFieldsValue = R.pipe(R.path<string>(['value']), R.defaultTo(''))(inputFields);
      if (R.isEmpty(inputFieldsValue)) {
        disabled = true;
      } else {
        disabled = false;
      }
    });
  }

  let currentDisabled = [] as boolean[];
  if (R.hasPath(['input'])(item) && 'q8' === state) {
    item.input.forEach((element: string) => {
      const inputFields = R.path(['params', inputName(element)])(route);

      if (
        R.pipe(
          R.path<string>(['input', 'name']),
          R.defaultTo(''),
          R.equals('PERSONAL_PHONE')
        )(element)
      ) {
        currentDisabled.push(
          phoneValidator.validate(R.pipe(R.path<string>(['value']), R.defaultTo(''))(inputFields))
        );
      }
      if (
        R.pipe(
          R.path<string>(['input', 'name']),
          R.defaultTo(''),
          R.equals('PERSONAL_NAME')
        )(element)
      ) {
        currentDisabled.push(
          nameValidator.validate(R.pipe(R.path<string>(['value']), R.defaultTo(''))(inputFields))
        );
      }
      if (
        R.pipe(
          R.path<string>(['input', 'name']),
          R.defaultTo(''),
          R.equals('PERSONAL_EMAIL')
        )(element)
      ) {
        currentDisabled.push(
          emailValidator.validate(R.pipe(R.path<string>(['value']), R.defaultTo(''))(inputFields))
        );
      }
    });
    // if (R.hasPath(['input'])(item) && R.equals(state)('q9')) {
    //   item.input.forEach((element: string) => {
    //     const inputFields = R.path(['params', inputName(element)])(route);
    //     const inputFieldsValue = R.pipe(R.path<string>(['value']), R.defaultTo(''))(inputFields);

    //     if (
    //       R.pipe(
    //         R.path<string>(['input', 'name']),
    //         R.defaultTo(''),
    //         R.equals('PERSONAL_CHANNEL_NAME')
    //       )(element)
    //     ) {
    //       currentDisabled.push(
    //         nameValidator.validate(
    //           R.pipe((x) => x?.replaceAll('@', ''), R.defaultTo(''))(inputFieldsValue)
    //         )
    //       );
    //       if (inputFieldsValue?.[0] !== '@') {
    //         currentDisabled.push(false);
    //       }
    //     }
    //   });
    // }
    if (currentDisabled.includes(false)) {
      disabled = true;
    } else {
      disabled = false;
    }
  }
  return {
    disabled,
    currentDisabled,
  };
};
