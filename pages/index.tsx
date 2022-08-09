import type { NextPage } from 'next';
import Head from 'next/head';
import PageContainer from '../components/page-container/page-container';
import SearchContainer from '../components/search-container/searchContainer';

const Home: NextPage = () => {

    return (
        <div>
            <Head>
                <title>12ft | Access articles behind paywall</title>
                <meta name='description' content='Access articles behind paywalls' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <div className='overflow-auto'>
                <SearchContainer />
                <PageContainer />
            </div>
        </div>
    );
};

export default Home;
