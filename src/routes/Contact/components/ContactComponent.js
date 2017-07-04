import React from 'react'
import PropertyListRenderer from '../../../components/PropertyListRenderer'
import data from '../data.json'

const ContactComponent = () => {
  return (<PropertyListRenderer title='Contact Information' properties={data} />)
}

ContactComponent.propTypes = {}

export default ContactComponent
