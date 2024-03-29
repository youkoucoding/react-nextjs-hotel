import Header from 'components/header';
import Footer from 'components/footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='flex-1 lg:container px-4 py-6 mx-auto md:px-6 md:py-12'>
        {children}
      </main>
      <Footer />
    </>
  );
}
