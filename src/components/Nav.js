import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link, NavLink, useNavigate } from "react-router-dom"
import Logo from "../logo-react-redux.png"
import { setAuthedUser } from "../actions/authedUser"

const navigation = [
  { name: 'Home', href: '/dashboard/unanswered' },
  { name: 'Leaderboard', href: '/leaderboard' },
  { name: 'Add question', href: '/add' },
]

export default function Nav() {

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const authedUser = useSelector(({ authedUser }) => authedUser)
  const currentUser = useSelector(({ users }) => users[authedUser])

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(setAuthedUser(null))
    navigate('/login')
  }

  return (
    <header className="">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b-4 border-emerald-500" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="hidden md:block">
            <Link to={navigation[0].href}>
              <span className="sr-only">Your Company</span>
              <img className="h-14 w-auto" src={Logo} alt="" />
            </Link>
          </div>
          <div className="ml-10 space-x-8">
            {navigation.map((link) => (
              <NavLink
                to={link.href}
                key={link.href  }
                exact="/leaderboard"
                className={({ isActive }) => isActive
                  ? "text-base font-medium text-emerald-600 border-b-2 border-emerald-500"
                  : "text-base font-medium text-emerald-500 hover:text-emerald-600" }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="ml-10 space-x-4 hidden md:block">
            { authedUser &&
              <div className="flex items-center">
                <span className="text-base font-medium text-emerald-500 hover:text-emerald-500 mr-2">
                  Hello, {currentUser.name}
                </span>
                <img className="h-8 w-auto rounded-full bg-gray-600 mr-2" src={currentUser.avatarURL} alt="" />
                <NavLink to="#" onClick={handleLogout} className="inline-block rounded-md border border-transparent bg-emerald-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">
                  Log out
                </NavLink>
              </div>
            }
            { !authedUser &&
              <NavLink to="/login" className="inline-block rounded-md border border-transparent bg-emerald-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">
                Log in
              </NavLink>
            }
          </div>
        </div>
      </nav>
    </header>
  )
}