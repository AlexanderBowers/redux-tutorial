import React from 'react'
import {Field, reduxForm} from 'redux-form'

let ContactForm = props => {
    const {handleSubmit} = props
    return <form onSubmit={handleSubmit}>{/* form body*/}</form>
}