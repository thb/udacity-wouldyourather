import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { handleSaveQuestionAnswer } from "../actions/questions"

const QuestionAsk = (props) => {
  const dispatch = useDispatch()

  const question = useSelector((state) => state.questions[props.id])
  const authedUser = useSelector((state) => state.authedUser)

  const [answer, setAnswer] = useState("")

  const optionValues = ['optionOne', 'optionTwo']

  const handleChange = (e) => {
    e.preventDefault()
    setAnswer(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(handleSaveQuestionAnswer({authedUser, qid: question.id, answer}))
  }

  return (
    <div>
      <h4 className="text-xl font-bold">Would you rather ...</h4>
      <form onSubmit={handleSubmit}>
        {[question.optionOne, question.optionTwo].map((option, index) => (
          <div key={index} className="my-4">
            <label htmlFor={option.text} className="inline-flex items-center">
              <input type="radio" id={option.text} name="option" value={optionValues[index]} 
                onChange={handleChange} />
              <span className="ml-2">{option.text}</span>
            </label>
          </div>
        ))}
        <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded w-full">Submit</button>
      </form>
    </div>
  )
}

export default QuestionAsk