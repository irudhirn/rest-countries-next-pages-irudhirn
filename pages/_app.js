import '@/styles/globals.css';

import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Layout from '@/components/layouts/main-layout';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}
