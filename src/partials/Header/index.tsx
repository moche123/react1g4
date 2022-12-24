import React from 'react'
import './Header.css'

// const Header = (props:any) => {
//   return (
//     <div className={ props.mode == 'light' ? 'light' : 'dark' }>
//         <h1>Hello: {props.name}</h1>
//     </div>
//   )
// }
type Props= {
  mode: string,
  name: string,
  age?: number
}

const Header = ({ mode,name,age=15 }: Props) => {
  return (
    <div className={mode == 'light' ? 'light' : 'dark' }>
        <h1>Hello: {name} - {age}</h1>
    </div>
  )
}

export default Header