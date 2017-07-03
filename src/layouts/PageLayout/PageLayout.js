import React from 'react'
import PropTypes from 'prop-types'
import './PageLayout.scss'
import Sidebar from './Sidebar'

export const PageLayout = ({ children }) => (
  <div style={{ width: '100%', height: '100%' }}>
    <Sidebar />
    <div style={{ height: '100%', marginLeft: 200 }}>
      {children}
    </div>
  </div>
)
PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
