import type { ReactNode } from 'react';

import { AppConfig } from '@/utils/AppConfig';

interface IFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
}

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
    <div className="flex flex-col items-center justify-center py-4">
      <span className="text-3xl">{content.title}</span>
      <span className="text-gray-400">
        Created by: {author}, {convertDate(content.pubDate)}
      </span>
    </div>
  );
};

const PostContent = ({ content, children }: IPostContent) => {
  return (
    <div className="z-20 flex flex-col items-center">
      <div className="w-4/12">
        <img
          className="z-20 rounded-md border border-gray-800 drop-shadow-xl"
          src={content.imgSrc}
          alt={content.imgAlt}
        />
      </div>
      <div className="prose !prose-invert z-20 my-8 flex max-w-[50%] flex-col leading-snug">
        {children}
      </div>
    </div>
  );
};

const BlogPost = (props: IBlogPostProps) => (
  <div className="flex flex-col items-center justify-center pb-20 pt-10">
    <PostHeader content={props.frontmatter} author={AppConfig.author} />

    <PostContent content={props.frontmatter}>{props.children}</PostContent>
  </div>
);

export { BlogPost };
