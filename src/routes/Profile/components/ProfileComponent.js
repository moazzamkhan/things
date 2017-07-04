import React from 'react'
import PropertyListRenderer from '../../../components/PropertyListRenderer'
import data from '../data.json'

const ProfileComponent = () => {
  return (<PropertyListRenderer title='Profile Information' properties={data} />)
}

ProfileComponent.propTypes = {}

export default ProfileComponent
