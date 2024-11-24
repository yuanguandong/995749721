import React from 'react';


export default (props:any)=>{
  const {name} = props
  const url = `http://github.com/yuanguandong/code/blob/master/draw/${name}.png?raw=true`
  return <img src={url} />
}