import React, { useEffect, useRef, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import Question from "./Question"

const tabs = [
  { name: "Unanswered Questions", href: "unanswered" },
  { name: "Answered Questions", href: "answered" },
]

const Dashboard = () => {

  let { tab } = useParams()

  const questions = useSelector((state) => state.questions)
  const users = useSelector((state) => state.users)

  const answeredQuestions = Object.values(questions).filter((question) => {
    return Object.keys(users[question.author].answers).includes(question.id)
  }).sort((a, b) => b.timestamp - a.timestamp)

  const unansweredQuestions = Object.values(questions).filter((question) => {
    return !Object.keys(users[question.author].answers).includes(question.id)
  }).sort((a, b) => b.timestamp - a.timestamp)

  tab = tab || "unanswered"
  const activeQuestions = tab == "answered" ? answeredQuestions : unansweredQuestions

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
        <Question key={question.id} question={question} />
      ))}
    </div>
  )

}

export default Dashboard