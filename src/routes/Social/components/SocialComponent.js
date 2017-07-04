import React from 'react'
import PropertyListRenderer from '../../../components/PropertyListRenderer'
import data from '../data.json'

const SocialComponent = () => {
  return (<PropertyListRenderer title='Social Account' properties={data} />)
}

SocialComponent.propTypes = {}

export default SocialComponent
