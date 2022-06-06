import Head from 'next/head';
import Header from './Header';
import { WEB_TITLE } from '../CONSTANTS';

function Layout({ headerInterval, children, subtitle }) {
  return (
    <>
      <Head>
        <title>{subtitle ? `${WEB_TITLE} - ${subtitle}` : WEB_TITLE}</title>
      </Head>
      <Header headerInterval={headerInterval} />
      {children}
    </>
  );
}
export default Layout;
