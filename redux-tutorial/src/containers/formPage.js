import React from 'react'
import ContactForm from './components/ContactForm'

const FormPage = (props) => {
    submit = values => {
        console.log(values)
    }
    render() 
        return <ContactForm onSubmit={this.submit}/>
    
}
export default FormPage