import Head from 'next/head';
import PrimaryLayout from '../../../components/layouts/primary/PrimaryLayout';
import { NextPageWithLayout } from '../../page';
import Exclusive from '../../../components/Exclusive/Exclusive';
import CSToken from '../../../components/c-s-token/CSToken';
import CampaignBanner from '../../../components/banner/CampaignBanner';
import { ApiClient } from '../../../utils/api-client';

const Campaign: NextPageWithLayout<any> = ({ drop }) => {
  const { title, description, image, collections } = drop;
  return (
    <div className="container-wrapper">
      <Head>
        <title>{`Campaign Listing Page - NFT's Superfandom Animation Landing Page`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CampaignBanner title={title} description={description} image={image} />
      <Exclusive collections={collections} />
      <CSToken pageName={'campaign'} collections={collections} />
    </div>
  );
};

export default Campaign;

Campaign.getLayout = (page) => {
  return <PrimaryLayout headerNext={true}>{page}</PrimaryLayout>;
};

export const getStaticProps = async ({ params }: any) => {
  const jsonResult = await ApiClient.get(
    `/drops/${params.id}?withCollections=true`
  );

  const drop = jsonResult.data;
  if (!drop) {
    if (process.env.DEBUG == 'true')
      console.log('/[drop] - Drop not found for params ', params);
    return {
      notFound: true,
    };
  }
  return {
    props: {
      drop,
    },
    // we will attempt to re-generate the page:
    // - when a request comes in
    revalidate: 60 * 60, // 1 hour
  };
};

export async function getStaticPaths() {
  if (process.env.DEBUG == 'true') console.debug('getStaticPaths - [username]');

  const resultJson = await ApiClient.get('/drops');

  const drops = resultJson.data;
  if (process.env.DEBUG == 'true')
    console.debug('getStaticPaths - [slug] - trendingCreators', drops);

  if (!drops) return { paths: [], fallback: true };

  // Get the paths we want to pre-render based on trending influencers
  const paths = drops.map((drop: any) => ({
    params: { slug: drop.slug, id: drop._id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: blocking } will server-render pages
  // on-demand if the path doesn't exist.
  return { paths: paths, fallback: true };
}