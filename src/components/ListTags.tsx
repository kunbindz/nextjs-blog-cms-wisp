
import { GetTagsResult } from "@wisp-cms/client";
import Link from "next/link";


export const ListTags = (tags: {tags: GetTagsResult}) => {
  const listPopularTags = ['tham-my', 'TVC', 'khai-truong', 'quang-cao', 'thuong-hieu', 'BDS' ]
  return (
      <section className="antialiased">
        <div className="mx-auto max-w-screen-xl 2xl:px-0">
          {/* <div className="mb-4 flex items-center justify-between gap-4 md:mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">List tags: <strong>{tags.tags.pagination.totalTags}</strong></h2>
          </div> */}

          <div className="space-y-2 py-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
              Popular Tags
            </h1>
            <p className="!mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400">
              Popular tags feature the most widely favored topics.
            </p>
          </div>

          {/* <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {
              tags.tags.tags.map(tag => (
                <Link key={tag.id} href={`/tag/${tag.name}`} className="flex items-center rounded-lg border transition-all duration-300 hover:translate-y-[-5px] border-gray-200 bg-gray-50 px-4 py-2 hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{(tag.name).charAt(0).toUpperCase() + (tag.name).slice(1)}</span>
                </Link>
              ))
            }
          </div> */}
          <div className="popular-tags grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-10">
            {tags.tags.tags
            .filter(tag => listPopularTags.includes(tag.name))
            .map(tag => {
              const className = `${tag.name} flex items-center rounded-lg border transition-all duration-300 hover:translate-y-[-5px] border-gray-200 px-4 py-2 dark:border-gray-700`;
              return (
                <Link key={tag.id} href={`/tag/${tag.name}`} className={className}>
                  <div className="my-auto text-white">#{tag.name}</div>
                </Link>
              );
            })}
      </div>
        </div>
      </section>
  );
};
