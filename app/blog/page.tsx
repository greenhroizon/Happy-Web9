import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FooterSmall from "@/components/FooterSmall";
import { fetchWordPressPosts, resolvePostImage, stripHtml } from "@/lib/wordpress";

interface BlogPageProps {
  searchParams: Promise<{ q?: string }>;
}

export const metadata = {
  title: "Blog | Happy Ho",
  description: "Read the latest Happy Ho articles powered by WordPress.",
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() ?? "";

  let posts = [] as Awaited<ReturnType<typeof fetchWordPressPosts>>;
  let fetchError = "";

  try {
    posts = await fetchWordPressPosts(query);
  } catch {
    fetchError = "We could not load blog posts right now. Please try again in a moment.";
  }

  return (
    <>
      <div className="bg-[#E5DFD5] rounded-b-[60px] pb-10">
        <Header />
        <section className="pt-8 px-6 xl:p-8 mx-auto max-w-[1200px]">
          <h1 className="text-3xl md:text-5xl text-center font-canela">Blog</h1>
          <p className="text-center text-[#736345] mt-4 text-sm md:text-lg">
            Articles are fetched live from your WordPress backend.
          </p>

          <form className="mt-8 mx-auto max-w-[760px]" action="/blog" method="GET">
            <div className="flex items-center gap-3">
              <input
                name="q"
                defaultValue={query}
                placeholder="Search articles..."
                className="w-full rounded-full border border-[#544120]/30 px-5 py-3 bg-white outline-none focus:ring-2 focus:ring-[#3f5c4a]/30"
              />
              <button
                type="submit"
                className="rounded-full bg-[#3f5c4a] text-white px-6 py-3 hover:bg-[#162d22]"
              >
                Search
              </button>
            </div>
          </form>
        </section>
      </div>

      <section className="px-6 xl:px-8 py-12 mx-auto max-w-[1200px]">
        {fetchError ? <p className="text-center text-red-700">{fetchError}</p> : null}

        {!fetchError && posts.length === 0 ? (
          <p className="text-center text-[#736345]">No articles found{query ? ` for "${query}"` : ""}.</p>
        ) : null}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <article key={post.id} className="rounded-3xl bg-[#e9e1d6] overflow-hidden shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={resolvePostImage(post)}
                alt={stripHtml(post.title.rendered) || "Article image"}
                className="w-full h-[200px] object-cover"
                loading="lazy"
              />

              <div className="p-5 flex flex-col gap-4">
                <h2
                  className="text-lg font-semibold text-[#544120] line-clamp-2"
                  dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                />
                <p className="text-sm text-[#736345] line-clamp-3">{stripHtml(post.excerpt.rendered)}</p>
                <Link href={`/blog/${post.slug}`} className="text-[#3f5c4a] font-medium hover:underline">
                  Read Article →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="hidden md:block">
        <Footer />
      </div>
      <div className="block md:hidden">
        <FooterSmall />
      </div>
    </>
  );
}
