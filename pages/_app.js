import Head from 'next/head';
import '../styles/global.css';
import { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Layout from '../components/Layout';
import { IdProvider } from '@radix-ui/react-id';
import LoadingBar from '../components/LoadingBar';
import { ThemeProvider } from '../context/ThemeContext';
import { QueryProvider } from '../context/QueryContext';
import { SenseProvider } from '../context/SenseContext';
import { RecentProvider } from '../context/RecentContext';
import { BookmarkProvider } from '../context/BookmarkContext';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener('load', () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker
          .register('/sw.js', { scope: './' })
          .then(function () {
            console.log('ServiceWorker succesfully registered');
          })
          .catch(function (err) {
            console.log('ServiceWorker registration failed: ', err);
          });
      } else {
        console.log('Service workers are not supported.');
      }
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <IdProvider>
        <ThemeProvider>
          <QueryProvider>
            <SenseProvider>
              <BookmarkProvider>
                <RecentProvider>
                  <LoadingBar />
                  <Layout>
                    <NavBar />
                    <Component {...pageProps} />
                  </Layout>
                </RecentProvider>
              </BookmarkProvider>
            </SenseProvider>
          </QueryProvider>
        </ThemeProvider>
      </IdProvider>
    </>
  );
}

export default MyApp;
