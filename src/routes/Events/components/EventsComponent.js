import React from 'react'
import PropertyListRenderer from '../../../components/PropertyListRenderer'
import data from '../data.json'

const EventsComponent = () => {
  return (<PropertyListRenderer title='Events' properties={data} />)
}

EventsComponent.propTypes = {}

export default EventsComponent
