export default `
if isInput
  label(for=name).additional-information__label #{label}
  input.additional-information__input(type=inputType, name=name, id=name, value=value)
  if error
    span.additional-information__error #{error}
else
  span.additional-information__label #{label}
  span.additional-information__value #{value}
`;
