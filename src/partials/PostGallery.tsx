import type { MarkdownInstance } from 'astro';

import type { IFrontmatter } from '../types/types';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const PostGallery = ({ postList }: IRecentPostsProps) => {
  return (
    <section className="flex w-8/12 flex-col space-y-8 pb-10 md:w-11/12 md:flex-row md:space-x-4 md:space-y-0 lg:w-9/12 xl:w-8/12 2xl:w-7/12">
      {postList.map((post, index) => (
        <a
          key={`${post.frontmatter.title}_${index.toString}`}
          className="z-20 w-full md:w-[33%] md:hover:translate-y-1"
          href={post.url}
        >
          <div key={post.frontmatter.pubDate} className="card glass w-full">
            <div className="aspect-h-2 aspect-w-3">
              <img
                className="h-full w-full rounded-t-md object-cover object-center"
                src={post.frontmatter.imgSrc}
                alt={post.frontmatter.imgAlt}
              />
            </div>
            <div className="card-body h-fit min-h-[12rem] pt-4 md:h-[18rem] md:pt-2 lg:h-[16rem] lg:pt-4">
              <h2 className="card-title bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {post.frontmatter.title}
              </h2>
              <p>{post.frontmatter.description}</p>
            </div>
          </div>
        </a>
      ))}
    </section>
  );
};

export default PostGallery;
