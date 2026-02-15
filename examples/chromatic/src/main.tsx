import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { LoadingSpinner } from './template/components/LoadingSpinner'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback={<LoadingSpinner />}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
)
