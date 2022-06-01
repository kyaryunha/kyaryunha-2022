import Head from 'next/head';
import { Global, css } from '@emotion/react';
import { WebTitle } from '../components/CONSTANTS';

const App = ({ Component, pageProps }) => (
    <>
        <Head>
            <meta charSet="utf-8" />
            <title>{WebTitle}</title>
        </Head>
        <Global
            styles={css`
            @font-face {
                font-family: 'Pretendard Variable';
                font-weight: 400;
                font-style: normal;
                font-display: swap;
                src: local('Pretendard Variable'), url('/fonts/PretendardVariable.woff2') format('woff2-variations');
            }
            body { 
              margin: 0;
              padding: 0; 
              overflow-x: hidden;
            }
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              font: inherit;
              font-family: 'Pretendard Variable', sans-serif;
            }
          `}
        />
        <Component {...pageProps} />
    </>
);

export default App;
