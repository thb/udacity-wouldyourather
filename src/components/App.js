import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'
import LoginBox from './LoginBox'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Leaderboard from './Leaderboard'
import QuestionAdd from './QuestionAdd'
import Question from './Question'
import NotFound from './NotFound'

const App = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const loading = useSelector((state) => state.loading)
  const [redirectUrl, setRedirectUrl] = useState(location.pathname === '/login' ? '' : location.pathname)
  const authedUser = useSelector((state) => state.authedUser)

  useEffect(() => {
    dispatch(handleInitialData())
    if (location.pathname !== '/login') {
      setRedirectUrl(location.pathname)
    }
  }, [dispatch, redirectUrl, location, authedUser])

  return (
    <Fragment>
      <LoadingBar />
      <Nav />
      { loading === true ? null : 
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path='/dashboard/:tab' element={<Dashboard />} />
          <Route path='/question/:id' element={<Question />} />
          <Route path='/leaderboard' element={<Leaderboard />} />
          <Route path='/login' element={<LoginBox redirectUrl={redirectUrl}/>} />
          <Route path='/add' element={<QuestionAdd />} />
        </Routes>
      }
    </Fragment>
  )
}

export default App
