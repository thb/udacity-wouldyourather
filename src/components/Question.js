import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Question = ({ question }) => {

  const users = useSelector((state) => state.users)

  return (
    <div key={question.id} className="box-border border-4 border-gray-200 m-4 rounded-lg">
      <div className=" bg-gray-100 p-2 border-b-4 border-gray-200 flex justify-between">
        <div className="font-bold text-base">{users[question.author].name} asks:</div>
        <div className="mt-1 font-base text-sm text-gray-400">{new Date(question.timestamp).toLocaleString()}</div>
      </div>
      <div className="flex">
        <div className="w-2/5 border-r-4 border-gray-200 flex justify-center items-center">
          <div className="w-16 h-16 rounded-full bg-gray-400">
            <img className="w-16 h-16" src={users[question.author].avatarURL} alt="avatar" />
          </div>
        </div>
        <div className="p-4 w-full">
          <h4 className="font-bold text-base mb-2">Would you rather...</h4>
          <p className="text-sm mb-2">...{question.optionOne.text}...</p>
          <Link to={`/question/${question.id}`} className="w-full border-2 border-emerald-500 block text-emerald-500 rounded-lg text-center text-sm py-1.5">View Poll</Link>
        </div>
      </div>
    </div>
  )
}

export default Question