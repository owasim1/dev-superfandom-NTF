import Head from 'next/head';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from './page';
import CausesBanner from '../components/banner/CausesBanner';
import FaqPage from '../components/FAQ/Faq';
import ActiveDrop from '../components/ActiveDrop/ActiveDrop';
import CSToken from '../components/c-s-token/CSToken';
import HowItWork from '../components/how-it-work/HowItWork';

const CausesPage: NextPageWithLayout = () => {

  return (
    <div className="container-wrapper">
      <Head>
        <title>{`Causes Page - NFT's Superfandom Animation Landing Page`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CausesBanner title={''} subtitle={''} desc={''} />
       <ActiveDrop />
       <CSToken pageName={"causes"}/>
      <HowItWork card1={false} card2={true} pageName={"causes"} />
      <FaqPage />
    </div>
  );
};

export default CausesPage;

CausesPage.getLayout = (page) => {
  return <PrimaryLayout headerNext={false}>{page}</PrimaryLayout>;
};
