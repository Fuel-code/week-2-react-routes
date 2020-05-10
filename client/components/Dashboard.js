import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/27f74de3-e577-439d-9daf-389da0ede196"> Go To Profile</Link>
      <Link to="/dashboard/main"> Go To Main </Link>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
