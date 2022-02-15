import InputBlock from '../components/input-block';

const Event = {
  onInputFocusOut(e: Event, validationFunc: (value: string) => string, inputBlock: InputBlock) {
    const target = e.target as HTMLInputElement;
    const error = validationFunc(target.value);

    inputBlock.setProps({
      error,
      value: target.value
    });
  },
  onFormSubmit(value: string, key: string, validationFunc: (val: string) => string, inputBlock: InputBlock, consoleObject: Record<string, string>) {
    const error = validationFunc(value);

    inputBlock.setProps({
      error,
      value
    });

    if (!error) {
      consoleObject[key] = value;
    }
  }
};

export default Event;
