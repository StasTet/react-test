import { createStore , applyMiddleware} from 'redux'
import reducer from '../reducers'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(reducers))
  }

  return store;
}