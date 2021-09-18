import React from 'react'
//import {ContactForm} from './components/form'
import newForm from './components/newForm'

export const FormPage = (props) => {
    submit = values => {
        console.log(values)
    }
    render() 
        //return <ContactForm onSubmit={this.submit}/>
        return newForm
    
}
export default FormPage