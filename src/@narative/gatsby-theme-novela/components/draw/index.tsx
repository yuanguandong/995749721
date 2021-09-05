import React from 'react';
import Image from '../Image/Image.Zoom'

export default (props)=>{
  const {name} = props
  const url = `http://github.com/yuanguandong/code/blob/master/draw/${name}.png?raw=true`
  return <Image src={url} />
}