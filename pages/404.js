import Head from 'next/head';
import ListMessage from '../components/ListMessage';
import MainLayout from '../components/MainLayout';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>پیدا نشد</title>
        <meta
          name="description"
          content="Page you were looking for was not found"
        />
      </Head>
      <MainLayout>
        <ListMessage>
          صفحه ای که نیاز دارید پیدا نشد.
        </ListMessage>
      </MainLayout>
    </>
  );
}
