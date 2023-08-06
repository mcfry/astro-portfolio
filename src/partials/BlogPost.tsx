import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

import type { IFrontmatter } from '../types/types';

type IBlogPostProps = {
  frontmatter: IFrontmatter;
  children: ReactNode;
};

type IPostContent = {
  content: IFrontmatter;
  children: ReactNode;
};

function convertDate(isoString: string) {
  const date = new Date(isoString);
  const day = date.getUTCDate();
  const month = date.getUTCMonth() + 1; // Months are zero-indexed, so we add 1
  const year = date.getUTCFullYear();
  return `${day}/${month}/${year}`;
}

const PostHeader = ({
  content,
  author,
}: {
  content: IFrontmatter;
  author: string;
}) => {
  return (
    <header className="flex flex-col items-center justify-center py-4">
      <span className="text-3xl">{content.title}</span>
      <span className="text-gray-400">
        Created by: {author}, {convertDate(content.pubDate)}
      </span>
    </header>
  );
};

const PostContent = ({ content, children }: IPostContent) => {
  return (
    <article className="z-20 flex flex-col items-center">
      <div className="w-9/12 sm:w-8/12 md:w-7/12">
        <img
          className="z-20 rounded-md border border-gray-800 drop-shadow-xl"
          src={content.imgSrc}
          alt={content.imgAlt}
        />
      </div>
      <div className="prose !prose-invert z-20 my-12 flex w-10/12 max-w-7xl flex-col leading-snug sm:w-9/12 md:w-8/12">
        {children}
      </div>
    </article>
  );
};

const BlogPost = (props: IBlogPostProps) => (
  <section className="flex flex-col items-center justify-center pb-20 pt-10">
    <PostHeader content={props.frontmatter} author={AppConfig.author} />

    <PostContent content={props.frontmatter}>{props.children}</PostContent>
  </section>
);

export { BlogPost };
