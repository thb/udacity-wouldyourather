import React, { useState } from "react"
import SelectUser from "./SelectUser"
import { useSelector, useDispatch } from "react-redux"
import { setAuthedUser } from "../actions/authedUser"
import { useNavigate } from "react-router-dom"

const LoginBox = () => {

  const users = useSelector(({ users }) => Object.values(users))
  const [selectedUser, setSelectedUser] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSelectUser = (user) => {
    setSelectedUser(user)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedUser === "") {
      alert("Please select a user")
      return
    }
    dispatch(setAuthedUser(selectedUser.id))
    navigate('/')
  }

  return (
    <div className="flex min-h-full flex-col justify-center sm:px-12 lg:p-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white border-2 border-gray-200 shadow sm:rounded-lg">
          <div className="bg-gray-200 border-b-2 border-gray-300 py-4 px-2">
            <h2 className="mt-6 text-center text-xl font-bold tracking-tight text-gray-900">
              Welcome to Would You Rather App !
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Please sign in to continue
            </p>
          </div>
          <div className="">
            <div className="flex justify-center">
              <h3 className="mt-4 text-2xl font-bold text-emerald-500">Sign In</h3>
            </div>
          </div>
          <div className="py-4 px-2">
            <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
              <div>
                <div className="mt-1">
                  <SelectUser people={users} selectedUser={selectedUser} onSelectUser={handleSelectUser} />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md border border-transparent bg-emerald-500 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}

export default LoginBox