import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Leaderboard = (props) => {
  
  const authedUser = useSelector((state) => state.authedUser)
  const users = useSelector((state) => state.users)
  
  const usersWithScores = Object.values(users).map((user) => {
    return {
      ...user,
      score: Object.keys(user.answers).length + user.questions.length
    }
  })

  const medalFor = (index) => {
    switch (index) {
      case 0:
        return '🥇'
      case 1:
        return '🥈'
      case 2:
        return '🥉'
      default:
        return ''
    }
  }

  if (authedUser === null) {
    return <Navigate to='/login' />
  }

  return (
    <div className="mx-auto sm:w-full md:w-2/3 my-4">
      {Object.values(usersWithScores).sort((a, b) => b.score - a.score).map((user, index) => (
        <div key={user.id} className="flex border-4 border-gray-200 rounded-lg m-2 relative">
          <div className="w-1/4 flex items-center justify-center">
            <img src={user.avatarURL} alt="avatar" className="w-24 h-24 rounded-full bg-gray-400" />
          </div>
          <div className="w-1/2 border-x-2 p-4">
            <h4 className="font-bold text-xl mb-2">{ user.name }</h4>
            <div className="flex justify-between border-b-2 py-2">
              <p>Answered questions</p>
              <p>{ Object.keys(user.answers).length }</p>
            </div>
            <div className="pt-2 flex justify-between">
              <p>Created questions</p>
              <p>{ user.questions.length }</p>
            </div>
          </div>
          <div className="w-1/4 flex items-center justify-center p-2">
            <div className="w-full border-4 border-gray-200 rounded-lg">
              <div className="border-b-4 bg-gray-100 text-sm font-bold py-2 text-center">Score</div>
              <div className="flex items-center justify-center p-4">
                <p className="bg-emerald-500 text-white rounded-full py-2 px-4">{ user.score }</p>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-0 h-0 border-gray-300 "
            style={{ borderWidth: '0 0 50px 50px', borderRightColor: 'transparent', borderBottomColor: 'transparent' }}
          >
          </div>
          <div className="absolute top-1 left-1">
            {medalFor(index)}
          </div>
        </div>
      ))}
    </div>
  )

}

export default Leaderboard