import {useState,useEffect} from 'react'
import ContactList from './List/index'
import ContactForm from './Form/index'
function Contacts() {
 const [contacts,setContacts]= useState([])
 useEffect((e)=>{
 
 },[contacts])
 
  return (
    
    <div className="App container">

  <div>
  <ContactList contacts={contacts}></ContactList>
  </div>
  <div>
    <ContactForm setContacts={setContacts} contacts={contacts}></ContactForm>
  </div>

</div>
  
  )
}

export default Contacts