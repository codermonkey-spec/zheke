import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import store from './store'
import routes from '@/routers'

import OneFooter from '@/components/one-footer'

function App(props) {
  
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          {
            renderRoutes(routes)
          }
          <OneFooter />
        </BrowserRouter>

      </div>
    </Provider>

  );
}

export default App;
