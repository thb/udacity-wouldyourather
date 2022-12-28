import React from "react"
import { useSelector } from "react-redux"

const QuestionPoll = (props) => {

  const question = useSelector((state) => state.questions[props.id])
  const authedUser = useSelector((state) => state.authedUser)

  const percentage = (option) => (
    Math.round(option.votes.length / totalVotes * 100)
  )

  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length

  const percentageStyle = (option) => (
    option.votes.length === 0 ? 'text-black-900 left-2' : 'text-white right-2'
  )

  return (
    <div>
      <h4 className="text-xl font-bold">Results:</h4>
      { [question.optionOne, question.optionTwo].map((option, index) => (
        <div key={index} className={`relative my-4 p-4 border-2 rounded ${option.votes.includes(authedUser) ? 'border-emerald-500 bg-emerald-100 text-emerald-600' : 'bg-gray-100'}`}>
          <p className="text-base font-bold mb-2">Would you rather {option.text}?</p>
          <div className="flex justify-start w-full bg-gray-200 rounded-md h-6 dark:bg-gray-300">
            <div className={`bg-emerald-500 h-6 relative rounded-md`} style={{ width: `${percentage(option)}%`}}>
              <p className={`font-bold absolute text-sm top-0.5 ${percentageStyle(option)}`}>
                {percentage(option)}%
              </p>
            </div>
          </div>
          <p className="text-black text-sm font-bold text-center mt-1">{option.votes.length} out of {totalVotes} votes</p>
          { option.votes.includes(authedUser) &&
            <div className="bg-yellow-400 text-white font-bold uppercase absolute -top-6 -right-6 text-xs rounded-full p-2">
              Your<br />vote
            </div>
          }
        </div>
      ))}
    </div>
  )
}

export default QuestionPoll