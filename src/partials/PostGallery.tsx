import type { MarkdownInstance } from 'astro';

interface IFrontmatter {
  title: string;
  description: string;
  pubDate: string;
  imgSrc: string;
  imgAlt: string;
}

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const PostGallery = ({ postList }: IRecentPostsProps) => {
  return (
    <div className="flex w-6/12 space-x-4 pb-10">
      {postList.map((post) => (
        <a className="z-20 w-[33%] hover:translate-y-1" href={post.url}>
          <div key={post.frontmatter.pubDate} className="card glass w-full">
            <div className="aspect-h-2 aspect-w-3">
              <img
                className="h-full w-full rounded-t-md object-cover object-center"
                src={post.frontmatter.imgSrc}
                alt={post.frontmatter.imgAlt}
              />
            </div>
            <div className="card-body">
              <h2 className="card-title bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                {post.frontmatter.title}
              </h2>
              <p>{post.frontmatter.description}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default PostGallery;
