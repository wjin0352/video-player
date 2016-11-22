import * as actions from './modalActions';

const initalState = {
  show: false,
  description: '',
  url: '',
  title: '',
  publishedAt: ''
}

const modalReducer = (state = initalState, action) => {
  console.log('action: ', action)
  console.log('state: ', state)
  switch(action.type) {
    case 'CREATE_MODAL':
      return {
        ...state,
        ...action.video
      }
    case 'OPEN_MODAL':
      return {
        ...state,
        show: action.show
      }
    case 'CLOSE_MODAL':
      return {
        ...state,
        show: false
      }
    default:
      return state;
  }
}

export default modalReducer;
