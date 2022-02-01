export default `
span.input-block__label #{labelName}
input.input-block__field(type=inputType, name=name, value=value)
if error
  span.input-block__error #{error}
`;
