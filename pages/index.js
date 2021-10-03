import Head from 'next/head';
import Layout from 'components/basic/Layout';
import Card from 'components/basic/Card';

export default function Home({ locations }) {
  return (
    <Layout className='flex flex-col items-center justify-center min-h-screen py-0'>
      <Head>
        <title>新たな旅</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='min-h-screen bg-gray-200 antialiased xl:flex xl:flex-col xl:h-screen'>
        <div className='xl:flex-1 xl:flex xl:overflow-y-hidden'>
          <main className='py-6 xl:flex-1 xl:overflow-x-hidden'>
            {locations.map((location, i) => (
              <div className="{'mt-6': i > 0}" key={i}>
                <div className='px-4 xl:px-8'>
                  <h3 className='text-gray-900 text-xl'>{location.title}</h3>
                  <p className='text-gray-600'>{location.description}</p>
                </div>
                <div className='mt-6 sm:overflow-x-auto sm:overflow-y-hidden'>
                  <div className='px-4 sm:inline-flex sm:pt-2 sm:pb-8 xl:px-8'>
                    {location.properties.map((property, index) => (
                      <div
                        className={`sm:mt-0 sm:w-80 sm:flex-shrink-0 ${
                          index > 0 ? 'mt-10 sm:ml-4' : ''
                        }`}
                      >
                        <Card property={property} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
    </Layout>
  );
}

export async function getServerSideProps() {
  // Server-side requests are mocked by `mocks/server.js`.
  const res = await fetch('https://my.backend/hotel');
  const locations = await res.json();
  // console.log(locations);

  return { props: { locations } };
}
