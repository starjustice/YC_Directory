import { auth } from "../../auth";
import SearchForm from "../../components/SearchForm";
import StartupCard, { StartupTypeCard } from "../../components/StartupCard";
import { sanityFetch, SanityLive } from "../../sanity/lib/live";
import { STARTUPS_QUERY } from "../../sanity/lib/queries";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  // get data search for search Form using uri
  const query = (await searchParams).query;
  const params = { search: query || null };

  const session = await auth();

  console.log(session?.id);

  // normal fetch
  // const posts = await client.fetch(STARTUPS_QUERY, params);

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: { _id: 1, name: "Adrian" },
  //     _id: 1,
  //     description: "This is a description",
  //     image:
  //       "https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  // ];
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pith Your Startup, <br /> Connect With Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-result">No startups found</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
