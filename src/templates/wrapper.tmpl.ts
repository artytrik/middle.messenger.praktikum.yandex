export default `
if wrappers
  each val in wrappers
    if isList
      ul(class=val)
    else
      div(class=val)
`;
