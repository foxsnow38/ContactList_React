import {useState} from 'react'

function ContactForm({setContacts, contacts}) {
  const [form,setForm] = useState({full_name:'',phone_number:''})
  const onChangeInput = (e) => {
    setForm({...form,[e.target.name]:e.target.value}) 
    
 }
  
  const onSubmit = (e)=>{
    e.preventDefault()
    if(form.full_name ===``|| form.phone_number===``)  return false
    setContacts([...contacts,form])
 
    setForm({full_name:``,phone_number:``})
   
  }
  return (
    <>
    <div>
   <form onSubmit={onSubmit}>
    <div>
  <input   name='full_name' placeholder='Fullname'  onChange={onChangeInput} value={form.full_name}   />
  </div>
  <div>
  <input  name='phone_number'placeholder='Phone Number'  onChange={onChangeInput} value={form.phone_number} />
  </div>
  <div>
  <button >Add</button>
  </div>
  </form>
  </div>
    </>
  
  )
}

export default ContactForm