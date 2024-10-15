
import { GetTagsResult } from "@wisp-cms/client";
import Link from "next/link";


export const ListTags = (tags: {tags: GetTagsResult}) => {
  const listPopularTags = ['co-hoc', 'tieu-dieu-du', 'khai-truong', 'quang-cao', 'thuong-hieu', 'BDS' ]
  return (
      <section className="antialiased">
        <div className="mx-auto max-w-screen-xl 2xl:px-0">
          <div className="space-y-2 py-6 md:space-y-5">
            <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-10 md:text-4xl md:leading-14">
              Popular Tags
            </h1>
            <p className="!mt-2 text-lg leading-7 text-gray-500 dark:text-gray-400">
              Popular tags feature the most widely favored topics.
            </p>
          </div>
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
