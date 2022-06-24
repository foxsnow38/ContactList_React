import React from 'react'
import { useState } from 'react'

export default function ContactList({contacts}) {
  const [filterText,setFilterText] = useState(``)
  let filtered = contacts.filter( (e)=>{

   return Object.keys(e).some(key => {

  return  e[key].toString().toLowerCase().includes(filterText.toLowerCase())
   }) 
  })


  return (
   <>
   <input type="text" placeholder='Filter' value={filterText} onChange={ e => setFilterText(e.target.value.toString()) }/>
   <ul>
     {filtered.map((e,i)=><li key={i}>{e.full_name }</li>)}
   </ul>
   
   </>
  )
}
