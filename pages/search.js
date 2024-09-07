import Head from 'next/head';
import useFetch from '../hooks/useFetch';
import SearchBar from '../components/SearchBar';
import SearchList from '../components/SearchList';
import MainLayout from '../components/MainLayout';
import ListMessage from '../components/ListMessage';
import { useQueryContext } from '../context/QueryContext';
import SearchListItem from '../components/SearchListItem';
import Image from 'next/image';

export default function search() {
  const [query, setQuery] = useQueryContext();
  // dont fetch if query is empty
  // https://swr.vercel.app/docs/conditional-fetching#conditional
  const { data, isLoading, isError } = useFetch(
    query ? `/api/querysense?word=${query}` : null
  );

  // print error to console
  if (isError) {
    console.error(isError.toString());
  }

  return (
    <>
      <Head>
        <title>جستجو</title>
        <meta name="description" content="Search page for the dictionary app" />
      </Head>
      <MainLayout>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <SearchBar query={query} setQuery={setQuery} />
        </form>
        {/* no input, show encouraging message */}
        {!query && (
          <ListMessage>
            کلمه مورد نظر را وارد کنید
          </ListMessage>
        )}
        {/* input and loading */}
        {query && isLoading && <ListMessage>در حال دریافت اطلاعات...</ListMessage>}
        {/* no result found */}
        {Array.isArray(data) && !data.length && (
          <ListMessage>پیدا نشد</ListMessage>
        )}
        {/* fails eg. no internet connection */}
        {isError && (
          <ListMessage>
            خطایی رخ داد. اتصال اینترنت را بررسی کنید.
          </ListMessage>
        )}
        {/* display search list if successful */}
        {data && (
          <SearchList>
            {data.map((meaning) => {
              return <SearchListItem {...meaning} key={meaning.offset} />;
            })}
          </SearchList>
        )}
        {!data && (
          <section style={{justifyContent:'center',alignSelf:'center'}}>
          <a href="https://daramet.com/zabannian.ir">
          <Image src={require('../public/donation.png')} alt='حمایت مالی از زبانیان' />
          </a>
        </section>
        )}
      </MainLayout>
    </>
  );
}
