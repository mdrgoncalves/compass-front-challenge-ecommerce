import { Fragment } from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom'
import { Routes } from './routes';

import { GlobalStyle } from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Fragment>
    <GlobalStyle />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Fragment>
)
