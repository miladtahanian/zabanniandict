import Head from 'next/head';
import SearchList from '../components/SearchList';
import ListHeader from '../components/ListHeader';
import ListMessage from '../components/ListMessage';
import MainLayout from '../components/MainLayout';
import SearchListItem from '../components/SearchListItem';
import { useBookmarkContext } from '../context/BookmarkContext';
import Link from 'next/link';

export default function Bookmarks() {
  const { bookmark, setBookmark } = useBookmarkContext();
  const clearBookmark = () => {
    setBookmark({
      type: 'CLEAR',
    });
  };

  return (
    <>
      <Head>
        <title>Bookmarks</title>
        <meta
          name="description"
          content="Bookmarks page for the dictionary app"
        />
      </Head>
      <MainLayout>
        <ListHeader disabled={bookmark.length <= 0} handleClick={clearBookmark}>
          علاقه مندی
        </ListHeader>
        {bookmark.length > 0 && (
          <SearchList>
            {bookmark.map((sense) => {
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
        {bookmark.length <= 0 && (
          <ListMessage>
            لیست خالی است
          </ListMessage>
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
