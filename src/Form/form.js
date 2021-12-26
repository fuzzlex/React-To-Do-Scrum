import React, { useState } from 'react';



function Form({addvalue}) {
    const [text, setText] = useState("");    

 
    const submit = (e) =>{
        e.preventDefault();
        addvalue({text})
        setText("")
    }


 

    return (
        
        <div className='mainTarget'>
        <form  onSubmit={submit}>
        <input 
         
         type="text"
         placeholder='Please enter your target...'
         value = {text}
         onChange={(e) =>setText(e.target.value)
          } />
          <input type="submit" value="Submit" />
          <div></div>
          




        </form>
    
 
            
        </div>
   
    )
}

export default Form
