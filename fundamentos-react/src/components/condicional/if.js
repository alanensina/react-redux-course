export default (props) => {
  const elseChild = props.children.filter((child) => {
    return child.type && child.type.name === 'Else';
  })[0];

  const ifChildren = props.children.filter((child) => {
    return child !== elseChild;
  });

  console.log(elseChild);

  if (props.test) {
    return ifChildren;
  } else if (elseChild) {
    return elseChild;
  }
  return false;
};

export const Else = (props) => props.children;
