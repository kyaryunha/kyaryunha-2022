import Head from 'next/head';
import { Global, css } from '@emotion/react';
import { WebTitle } from '../components/CONSTANTS';
import {useEffect, useMemo, useReducer, useState} from "react";
import {BREAKPOINTS} from "../styles/MediaQueries";
import {MEDIA_QUERIES, MediaQueriesContext} from "../contexts/MediaQueries.context";
import {StyledFooter} from "../styles/Page.style";
import {useRouter} from "next/router";
import * as gtag from "../lib/gtag";

const initialState = {
    mediaQueries: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case MEDIA_QUERIES.WINDOW_RESIZE:
            return {
                mediaQueries: action.value,
            }
        default:
            return state;
    }
}


const App = ({ Component, pageProps }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {mediaQueries} = state;
    const value = useMemo(() => ({
        mediaQueries, dispatch
    }),[mediaQueries]);
    const handleResize = () => {
        const windowWidth = window.innerWidth;
        for (let breakpointIdx = 0; breakpointIdx < BREAKPOINTS.length; breakpointIdx++) {
            if (windowWidth < BREAKPOINTS[breakpointIdx]) {
                dispatch({
                    type: MEDIA_QUERIES.WINDOW_RESIZE,
                    value: breakpointIdx,
                })
                return;
            }
        }
        dispatch({
            type: MEDIA_QUERIES.WINDOW_RESIZE,
            value: BREAKPOINTS.length,
        })
    }
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])

    return <>
        <Head>
            <meta charSet="utf-8"/>
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
        <MediaQueriesContext.Provider value={value}>
            <Component {...pageProps} />
            <StyledFooter>
                @ Shin Hyun
            </StyledFooter>
        </MediaQueriesContext.Provider>
    </>
};

export default App;
