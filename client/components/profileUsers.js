import React from 'react'
import {Link} from 'react-router-dom'
import Head from './head'
import { useParams } from 'react-router-dom' 


const Dummy = () => {
  const { user } = useParams() 
  return (
    <div>
      <Head title="Hello" />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        <div id="title">
              Profile
             <Link to="/dashboard/main"> Go To Main </Link>
             <Link to="/dashboard"> Go To Root </Link>
             </div>
             <div id="username" >
               { user }
             </div>
        </div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
