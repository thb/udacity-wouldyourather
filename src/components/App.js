import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'
import LoginBox from './LoginBox'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import QuestionAdd from './QuestionAdd'

const App = (props) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.loading)

  useEffect(() => {
    dispatch(handleInitialData())
  })

  return (
    <Router>
      <Fragment>
        <LoadingBar />
          <Nav />
          {loading === true
            ? null
            : <Routes>
                <Route path='/' exact='/' element={<Dashboard />} />
                <Route path='/leaderboard' exact='/' element={<Leaderboard />} />
                <Route path='/login' exact='/login' element={<LoginBox />} />
                <Route path='/add' exact='/add' element={<QuestionAdd />} />
              </Routes>}
      </Fragment>
    </Router>
  )
}

export default App
