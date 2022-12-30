import { saveQuestion, saveQuestionAnswer } from "../utils/api"
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { updateUserAnswers, updateUserQuestions } from './users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

function saveQuestionAnswerAction({ authedUser, qid, answer }) {
  return {
    type: SAVE_QUESTION_ANSWER,
    authedUser,
    qid,
    answer,
  }
}

export function handleSaveQuestion(info) {
  return (dispatch) => {
    dispatch(showLoading())

    return saveQuestion(info)
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(updateUserQuestions(question))
      })
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleSaveQuestion: ', e)
        alert('There was an error saving the question answer. Try again.', e)
      })
  }
}

export function handleSaveQuestionAnswer(info) {
  return (dispatch) => {
    dispatch(showLoading())

    return saveQuestionAnswer(info)
      .then(() => dispatch(updateUserAnswers(info)))
      .then(() => dispatch(saveQuestionAnswerAction(info)))
      .then(() => dispatch(hideLoading()))
      .catch((e) => {
        console.warn('Error in handleSaveQuestionAnswer: ', e)
        alert('There was an error saving the question answer. Try again.', e)
      })
  }
}