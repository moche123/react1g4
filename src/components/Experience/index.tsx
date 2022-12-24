import React from 'react'



const Experience = (props:any) => {

  const styleRed = {
    backgroundColor: 'red',
    padding: '20px',
    color: 'white',
    fontWeight: 'bold'
  }
  const styleBlue = {
    backgroundColor: 'blue',
    padding: '20px',
    color: 'white',
    fontWeight: 'bold'
  }


  return (
    <div style={ props.counter%2 ? styleRed: styleBlue }>
        <p>This is a content {props.title}: </p>
        {props.children}
        <p>{props.counter}</p>
    </div>
  )
}

export default Experience