import './styles/index.sass'
import './styles/vendor.less'
import App from './app/App.jsx'
import { render } from 'react-dom'
import React from 'react'
import { createStore } from 'redux'
import { preset, initialState } from './app/redux/reducers.js'
import * as dbHelpers from './app/redux/dbhelpers.js'
import { Provider } from 'react-redux'

require.context("./sounds/samples-pan/", true, /\.(mp3)$/)

main();

function main() {
    const store = createStore(preset, initialState, window.devToolsExtension ? window.devToolsExtension() : undefined);
    const app = document.createElement('div');
    app.className = 'handpan-constructor-wrapper'
    if (document.getElementById('content')){
      document.getElementById('content').appendChild(app);
    }
    else {
      document.body.appendChild(app);
    }
    render(
        <Provider store={store}>
          <App/>
        </Provider>,
      app);

}

