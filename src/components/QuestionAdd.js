import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, Navigate } from "react-router-dom"
import { useState } from "react"
import { handleSaveQuestion } from "../actions/questions"

const QuestionAdd = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const authedUser = useSelector((state) => state.authedUser)
  const [optionOne, setOptionOne] = useState('')
  const [optionTwo, setOptionTwo] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    if (e.target.name === 'optionOne') {
      setOptionOne(e.target.value)
    }
    if (e.target.name === 'optionTwo') {
      setOptionTwo(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (optionOne === '' || optionTwo === '') {
      alert('Please enter both options')
      return
    }
    dispatch(handleSaveQuestion({optionOneText: optionOne, optionTwoText: optionTwo, author: authedUser}))
    setOptionOne('')
    setOptionTwo('')
    navigate('/')
  }

  if (authedUser === null) {
    return <Navigate to='/login' />
  }

  return (
    <div className="mx-auto sm:w-full md:w-2/3 my-4">
      <div className="box-border border-4 border-gray-200 m-4 rounded-lg">
        <h4 className="text-center font-bold text-xl p-4 border-b-4 border-gray-200">Create New Question</h4>
        <div className="p-4">
          <form onSubmit={handleSubmit}>
            <p className="mb-4">Complete the question</p>
            <p className="text-xl font-bold mb-2">Would You Rather ...</p>
            <label className="block">
              <input type="text" name="optionOne" placeholder="Enter Option One Text Here" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    onChange={handleChange} />
            </label>
            <div className="flex items-center justify-between">
              <div className="border-b-2 border-gray-200 h-2 w-full"></div>
              <p className="font-bold text-base py-2 px-4">OR</p>
              <div className="border-b-2 border-gray-200 h-2 w-full"></div>
            </div>
            <label className="block">
              <input type="text" name="optionTwo" placeholder="Enter Option Two Text Here" className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    onChange={handleChange} />
            </label>
            <div className="mt-4">
              <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded w-full">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

}

export default QuestionAdd