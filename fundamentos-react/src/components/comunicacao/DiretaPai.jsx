import React from 'react'
import DiretaFilho from './DiretaFilho'

export default props => {
  return (
    <div>
      <DiretaFilho nome="João" idade={20} nerd={true}/>
      <DiretaFilho nome="Carla" idade={18} nerd={false}/>
      <DiretaFilho nome="Pedro" idade={25} nerd={false}/>
      <DiretaFilho nome="Joana" idade={21} nerd={true}/>
      <DiretaFilho nome="Karina" idade={14} nerd={true}/>
      <DiretaFilho nome="Mike" idade={16} nerd={false}/>
    </div>
  )
}