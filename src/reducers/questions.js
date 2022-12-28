import {
  RECEIVE_QUESTIONS,
  ADD_QUESTION,
  SAVE_QUESTION_ANSWER
} from '../actions/questions'

export default function questions(state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION :
      return {}
    case SAVE_QUESTION_ANSWER :
      // ajouter un vote avec l'id du user à l'option sur la question
      // ajouter une réponse au user avec l'id de la question et l'options choisie
      return {
        ...state,
        [action.qid]: {
          ...state[action.qid],
          [action.answer]: {
            ...state[action.qid][action.answer],
            votes: state[action.qid][action.answer].votes.concat([action.authedUser])
          }
        }
      }
    default :
      return state
  }
}
