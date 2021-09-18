import React from 'react'
import {Field, reduxForm} from 'redux-form'

let ContactForm = props => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
       <div>
           <label htmFor='firstName' component="input" type="text" />
       </div>
       <button type='submit'>Submit</button>
       </form>
    )
}

ContactForm = reduxForm({
    //this gives us a unique name for the form
    form: 'contact'
})(ContactForm)

export default ContactForm