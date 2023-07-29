import type { MarkdownInstance } from 'astro';

import type { IFrontmatter } from '../types/types';
import PostGallery from './PostGallery';

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-10">
        <span className="flex w-6/12 items-center justify-between p-2 text-3xl font-bold">
          <span>
            Recent{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Posts
            </span>
          </span>

          <span className="z-30 text-sm">
            <a href="/posts/">View all Posts →</a>
          </span>
        </span>

        <PostGallery postList={props.postList} />
      </div>
    </>
  );
};

export { RecentPosts };
