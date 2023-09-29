import Link from "next/link";

const Intro = () => {
  return (
    <section className="justify-between text-gray-400 md:grid grid-cols-2 md:justify-between md:gap-x-16 lg:gap-x-8 mt-6 md:mb-4">
      <div className="flex justify-between">
        <Link href="/">
          <h1 className="text-lg md:text-lg tracking-tighter leading-tight md:pr-8  hover:text-white">
            Moon Chou
          </h1>
        </Link>
        
        <Link href="/posts/about-moonchou" >
          <h1 className="text-lg md:text-lg md:hidden tracking-tighter leading-tight hover:text-white">
            About
          </h1>
        </Link>
      
      </div>

      <h4 className="flex justify-between text-gray-400 md:text-left text-lg">
        
        <h4 className="text-lg ">
          Product & Brand designer
        </h4>
        <Link
          href="/posts/about-moonchou"
          className="hidden md:block hover:text-white"
        >
          About
        </Link>
      </h4>
    </section>
  );
};

export default Intro;
