export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER_ANSWER = 'UPDATE_USER_ANSWER'
export const UPDATE_USER_QUESTION = 'UPDATE_USER_QUESTION'

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}

export function updateUserAnswers({ authedUser, qid, answer }) {
  return {
    type: UPDATE_USER_ANSWER,
    authedUser,
    qid,
    answer,
  }
}

export function updateUserQuestions({ author, id }) {
  return {
    type: UPDATE_USER_QUESTION,
    author,
    id,
  }
}
