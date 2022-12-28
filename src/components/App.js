import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import LoginBox from './LoginBox'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import QuestionAdd from './QuestionAdd'
import Question from './Question'

const App = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading)

  useEffect(() => {
    dispatch(handleInitialData())
  })

  const authedUser = useSelector((state) => state.authedUser)

  const protectedRoutes =
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route path='/:tab' element={<Dashboard />} />
      </Route>
      <Route path='/question/:id' element={<Question />} />
      <Route path='/leaderboard' exact='/' element={<Leaderboard />} />
      <Route path='/login' exact='/login' element={<LoginBox />} />
      <Route path='/add' exact='/add' element={<QuestionAdd />} />
    </Routes>

  const loginBox = <Routes><Route path='/login' element={<LoginBox />} /></Routes>

  return (
    <Router>
      <Fragment>
        <LoadingBar />
        <Nav />
        { loading === true ? null : protectedRoutes }
      </Fragment>
    </Router>
  )
}

export default App
