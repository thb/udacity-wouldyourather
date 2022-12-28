import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Leaderboard = (props) => {
  
  const authedUser = useSelector((state) => state.authedUser)
  
  if (authedUser === null) {
    return <Navigate to='/login' />
  }

  return (
    <div>
      <h3 className="font-bold">Leaderboard</h3>
    </div>
  )

}

export default Leaderboard