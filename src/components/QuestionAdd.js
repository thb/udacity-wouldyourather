import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const Dashboard = () => {

  const authedUser = useSelector((state) => state.authedUser)

  if (authedUser === null) {
    return <Navigate to='/login' />
  }

  return (
    <div className="mx-auto sm:w-full md:w-2/3 my-4">
      <div className="box-border border-4 border-gray-200 m-4 rounded-lg">
        <h4 className="text-center font-bold text-xl p-4 border-b-4 border-gray-200">Create New Question</h4>
        <div className="p-4">
          <form>
            <p>Complete the question</p>
            <p>Would You Rather</p>
            <input type="text" name="optionOne" placeholder="Enter Option One Text Here" />
            <p>OR</p>
            <input type="text" name="optionTwo" placeholder="Enter Option Two Text Here" />
            <button className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded w-full">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )

}

export default Dashboard