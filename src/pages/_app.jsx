import '@/styles/globals.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import { store } from '@/app/store'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider >
  )
}