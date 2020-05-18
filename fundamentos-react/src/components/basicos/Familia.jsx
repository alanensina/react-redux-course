import React, { cloneElement } from 'react';

export default (props) => {
  return (
    <div>
      {/* {cloneElement(props.children, props)} //Clona apenas um elemento */}
      {props.children.map((child, i) => {
        return cloneElement(child, {...props, key: i});
      })}
    </div>
  );
};
