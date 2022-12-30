import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Navigate } from 'react-router-dom'
import QuestionPoll from './QuestionPoll'
import QuestionAsk from './QuestionAsk'
import NotFound from './NotFound'

const Question = () => {

  const { id } = useParams()
  const question = useSelector((state) => state.questions[id])
  const users = useSelector((state) => state.users)
  const authedUser = useSelector((state) => state.authedUser)

  if (authedUser === null) {
    return <Navigate to='/login' />
  }

  if (question === undefined) {
    return <NotFound />
  }

  const userAlreadyAnswered = Object.keys(users[authedUser].answers).includes(question.id)

  return (
    <div className="mx-auto sm:w-full md:w-2/3 my-4">
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
            { userAlreadyAnswered &&
              <QuestionPoll id={question.id} />
            }
            { !userAlreadyAnswered &&
              <QuestionAsk id={question.id} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Question