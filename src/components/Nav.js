import React from "react"
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import Logo from "../logo-react-redux.png"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Leaderboard', href: '/leaderboard' },
  { name: 'Add question', href: '/add' },
]

export default function Nav() {

  const authedUser = useSelector(({ authedUser }) => authedUser)

  return (
    <header className="">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b-4 border-emerald-500" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="hidden md:block">
            <a href="/">
              <span className="sr-only">Your Company</span>
              <img className="h-14 w-auto" src={Logo} alt="" />
            </a>
          </div>
          <div className="ml-10 space-x-8">
            {navigation.map((link) => (
              <NavLink
                to={link.href}
                key={link.href  }
                exact="/leaderboard"
                className="text-base font-medium text-emerald-500 hover:text-emerald-500"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          <div className="ml-10 space-x-4 hidden md:block">
            { authedUser &&
              <div>
                <span className="text-base font-medium text-emerald-500 hover:text-emerald-500">
                  Hello, {authedUser}
                </span>
                <NavLink to="/logout" className="inline-block rounded-md border border-transparent bg-emerald-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">
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