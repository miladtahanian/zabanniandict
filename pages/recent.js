import Head from 'next/head';
import ListHeader from '../components/ListHeader';
import SearchList from '../components/SearchList';
import MainLayout from '../components/MainLayout';
import ListMessage from '../components/ListMessage';
import SearchListItem from '../components/SearchListItem';
import { useRecentContext } from '../context/RecentContext';
import Link from 'next/link';

export default function Recent() {
  const { recent, setRecent } = useRecentContext();

  const clearRecents = () => {
    setRecent({
      type: 'CLEAR',
    });
  };

  return (
    <>
      <Head>
        <title>اخیر</title>
        <meta name="description" content="Recent page for the dictionary app" />
      </Head>
      <MainLayout>
        <ListHeader disabled={recent.length <= 0} handleClick={clearRecents}>
          اخیر
        </ListHeader>
        {recent.length > 0 && (
          <SearchList>
            {recent.map((sense) => {
              return (
                <SearchListItem
                  lemma={sense.lemma}
                  pos={sense.pos}
                  offset={sense.offset}
                  def={sense.def}
                  key={sense.offset}
                />
              );
            })}
          </SearchList>
        )}
        {recent.length <= 0 && (
          <ListMessage>لیست خالی است!</ListMessage>
        )}

        <div className="border-t border-amber-800 mt-8 pt-4 text-center text-sm text-gray-300">
          تمامی حقوق این وب اپلیکیشن مربوط به زبانیان می باشد. 1404 - طراحی و توسعه توسط{" "}
          <Link href="https://github.com/miladtahanian" className="text-white hover:text-amber-300">
            میلاد طحانیان
          </Link>
        </div>
      </MainLayout>
    </>
  );
}
