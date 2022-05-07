import React from 'react'

const Filter = ({dataType,setDataType}) => {
  return (
    <div className="filter-bar">
      <button>Search</button>
      <button className={dataType==='button'?'active':''} onClick={()=>setDataType('button')}>Button</button>
      <button className={dataType==='card'?'active':''} onClick={()=>setDataType('card')}>Card</button>
      <button className={dataType==='footer'?'active':''} onClick={()=>setDataType('footer')}>Footer</button>
      <button className={dataType==='form'?'active':''} onClick={()=>setDataType('form')}>Form</button>
    </div>
  )
}

export default Filter