type TechStackProps = {
  techStack: string[];
  size: number;
  breakpoint: string;
};

const TechStack = ({ techStack, size, breakpoint }: TechStackProps) => {
  const getChunks = (arr: string[], chunkSize: number) => {
    const result = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      result.push(chunk);
    }
    return result;
  };

  const getBpp = (bp: string) => {
    switch (bp) {
      case 'sm':
        return ' sm:flex sm:flex-col';
      case 'md':
        return ' md:flex md:flex-col';
      case 'lg':
        return ' lg:flex lg:flex-col';
      case 'xl':
        return ' xl:flex xl:flex-col';
      case '2xl':
        return ' 2xl:flex 2xl:flex-col';
      case 'only-m':
        return '';
      default:
        return '';
    }
  };

  const getBpm = (bp: string) => {
    switch (bp) {
      case 'sm':
        return ' sm:hidden';
      case 'md':
        return ' md:hidden';
      case 'lg':
        return ' lg:hidden';
      case 'xl':
        return ' xl:hidden';
      case '2xl':
        return ' 2xl:hidden';
      case 'only-m':
        return '';
      default:
        return '';
    }
  };

  return (
    <>
      {/* Tablet+ */}
      <div className={`hidden${getBpp(breakpoint)}`}>
        {getChunks(techStack, size).map((chunk, i) => (
          <div key={i}>
            <ul className="inline-flex w-full list-disc flex-wrap marker:text-white">
              {chunk.map((item, j) => (
                <li key={`${item}_${j}`} className="ml-6">
                  {item}
                </li>
              ))}
            </ul>
            <br />
          </div>
        ))}
      </div>

      {/* Mobile */}
      <div className={`flex w-full flex-col items-center${getBpm(breakpoint)}`}>
        <ul className="inline-flex w-full list-disc flex-wrap justify-center pt-2 text-sm marker:text-white md:w-10/12">
          {techStack.map((item) => (
            <li key={item} className="ml-6">
              {item}
            </li>
          ))}
        </ul>
        <br />
      </div>
    </>
  );
};

export default TechStack;
