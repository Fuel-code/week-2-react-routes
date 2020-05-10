import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Dummy = () => {
  const { user } = useParams()
  return (
    <div>
      <Link to="/dashboard/main"> Go To Main </Link>
      <Link to="/dashboard"> Go To Root </Link>
      <div id="title">Profile</div>
      <div id="username">{user}</div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
