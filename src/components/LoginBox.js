import React from "react"
import Logo from "../logo-react-redux.png"
import SelectUser from "./SelectUser"
import { useSelector } from "react-redux"

const LoginBox = () => {

  const users = useSelector(({ users }) => (
    Object.values(users)
  ))

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
            <img
              className="my-8 mx-auto h-48 w-auto"
              src={Logo}
              alt="React Redux Logo"
            />
            <div className="flex justify-center">
              <h3 className="text-2xl font-bold text-emerald-500">Sign In</h3>
            </div>
          </div>
          <div className="py-4 px-2">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <div className="mt-1">
                  <SelectUser people={users} />
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