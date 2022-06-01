import Head from 'next/head';
import Header from "./Header";
import {WebTitle} from "../CONSTANTS";

const Layout = ({ headerInterval, children, subtitle }) => (
    <>
        <Head>
            <title>{subtitle?`${WebTitle} - ${subtitle}`:WebTitle}</title>
        </Head>
        <Header headerInterval={headerInterval}/>
        {children}
    </>
);
export default Layout;
