import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from '../shared/client/ThemeProvider';
import Head from 'next/head';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <title>FingerprintJS Pro Use Cases</title>
        </Head>

        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
