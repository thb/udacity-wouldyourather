import React from "react"
import { useSelector } from "react-redux"
import { Navigate, useParams } from "react-router-dom"
import { Link } from "react-router-dom"

const tabs = [
  { name: "Unanswered Questions", href: "unanswered" },
  { name: "Answered Questions", href: "answered" },
]

const Dashboard = () => {

  let { tab } = useParams()

  const questions = useSelector((state) => state.questions)
  const users = useSelector((state) => state.users)
  const authedUser = useSelector((state) => state.authedUser)

  const answeredQuestions = authedUser && Object.values(questions)
                                            .filter((question) => Object.keys(users[authedUser].answers).includes(question.id))
                                            .sort((a, b) => b.timestamp - a.timestamp)

  const unansweredQuestions = authedUser && Object.values(questions)
                                            .filter((question) => !Object.keys(users[authedUser].answers).includes(question.id))
                                            .sort((a, b) => b.timestamp - a.timestamp)

  tab = tab || "unanswered"
  const activeQuestions = tab == "answered" ? answeredQuestions : unansweredQuestions

  if (authedUser === null) {
    return <Navigate to='/login' />
  }

  return (
    <div className="mx-auto sm:w-full md:w-2/3 my-4 border-4 border-gray-200 rounded-lg">
      <div className="box-border flex w-full">
        {tabs.map((_tab) => (
          <Link
            key={_tab.href}
            className={`${tab == _tab.href ? 'text-emerald-500 bg-gray-100' : 'text-black' } box-border block w-full py-4 font-bold text-base text-center first:border-r-2 last:border-l-2 border-b-4 border-gray-200`}
            to={_tab.href}
          >{_tab.name}</Link>
        ))}
      </div>
      {activeQuestions.length > 0 && Object.values(activeQuestions).map((question) => (
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
      ))}
    </div>
  )

}

export default Dashboard