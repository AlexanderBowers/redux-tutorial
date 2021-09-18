import React from 'react'
import {ContactForm} from './components/form'

export const FormPage = (props) => {
    submit = values => {
        console.log(values)
    }
    render() 
        return <ContactForm onSubmit={this.submit}/>
    
}
export default FormPage