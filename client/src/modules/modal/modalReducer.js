import * as actions from './modalActions';

const initalState = {
  show: false,
  description: '',
  url: '',
  title: '',
  publishedAt: '',
  _id: ''
}

const modalReducer = (state = initalState, action) => {
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
