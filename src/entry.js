import './styles/index.sass'
import App from './app/App.jsx'
import { render } from 'react-dom'
import React from 'react'

main();

function main() {
    // const createPersistentStore = compose(
    //   persistState('users')
    // )(createStore);

    // const store = createPersistentStore(rootReducer, {}, window.devToolsExtension ? window.devToolsExtension() : undefined);
    const app = document.createElement('div');
    document.body.appendChild(app);
    
    render(
        // <Provider store={store}>
          <App/>,
        // </Provider>,
      app);    

}