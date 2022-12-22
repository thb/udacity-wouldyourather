import React from "react"
import { NavLink } from "react-router-dom"
import Logo from "../logo-react-redux.png"

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Leaderboard', href: '/leaderboard' },
  { name: 'Add question', href: '/add' },
]

export default function Nav() {
  return (
    <header className="">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-b-4 border-emerald-500" aria-label="Top">
        <div className="flex w-full items-center justify-between py-4">
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only">Your Company</span>
              <img className="h-14 w-auto" src={Logo} alt="" />
            </a>
            <div className="ml-10 hidden space-x-8 lg:block">
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
          </div>
          <div className="ml-10 space-x-4">
            <NavLink to="/login" className="inline-block rounded-md border border-transparent bg-emerald-500 py-2 px-4 text-base font-medium text-white hover:bg-opacity-75">
              Log in
            </NavLink>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-x-6 py-4 lg:hidden">
          {navigation.map((link) => (
            <a key={link.name} href={link.href} className="text-base font-medium text-emerald-500 hover:text-emerald-500">
              {link.name}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}