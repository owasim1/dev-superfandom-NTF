import Head from 'next/head';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import FaqPage from '../components/Faq/Faq';
import ActiveDrop from '../components/ActiveDrop/ActiveDrop';
import CSToken from '../components/c-s-token/CSToken';
import HowItWork2 from '../components/how-it-work/HowItWork2';
import FandomBanner from '../components/banner/FandomBanner';

const Fundom: NextPageWithLayout = () => {

  return (
    <div className="container-wrapper">
      <Head>
        <title>{`Fandom Page - NFT's Superfundom Animation Landing Page`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FandomBanner  />
      <ActiveDrop />
      <CSToken pageName={"fandom"}/>
      <HowItWork2  pageName={"fandom"} />
      <FaqPage />
    </div>
  );
};

export default Fundom;

Fundom.getLayout = (page) => {
  return <PrimaryLayout headerNext={false}>{page}</PrimaryLayout>;
};
