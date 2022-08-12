import React from 'react';

const tw = (arr, Component) => React.forwardRef((props, ref) => {
  return (<Component className={arr[0].replace('\n', '')} {...props} ref={ref} />)})

export default tw;
