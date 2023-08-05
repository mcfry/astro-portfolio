type Url = {
  current: string;
  prev: string | undefined;
  next: string | undefined;
};

type PaginationProps = {
  url: Url;
  currentPage: number;
};

const Pagination = ({ currentPage, url }: PaginationProps) => {
  return (
    <>
      <div className="join z-50 pb-10">
        {url.prev && (
          <a href={url.prev} className="btn join-item">
            «
          </a>
        )}
        <a className="btn join-item bg-slate-700 text-white hover:bg-cyan-600 hover:text-slate-800">
          Page {currentPage}
        </a>
        {url.next && (
          <a
            href={url.next}
            className="btn join-item bg-slate-700 text-white hover:bg-cyan-600 hover:text-slate-800"
          >
            »
          </a>
        )}
      </div>
    </>
  );
};

export default Pagination;
