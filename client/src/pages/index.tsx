import Head from 'next/head';
import Talk from 'components/service/Talk';

const Home = () => {
  return (
    <>
      <Head>
        <title>SUPER TONY</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Talk />
    </>
  );
};

export default Home;
