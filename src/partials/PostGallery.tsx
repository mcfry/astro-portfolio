import type { MarkdownInstance } from 'astro';

import type { IFrontmatter } from '../types/types';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const PostGallery = ({ postList }: IRecentPostsProps) => {
  return (
    <section className="flex w-6/12 space-x-4 pb-10">
      {postList.map((post, index) => (
        <a
          key={`${post.frontmatter.title}_${index.toString}`}
          className="z-20 w-[33%] hover:translate-y-1"
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
            <div className="card-body h-60">
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
