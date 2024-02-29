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
      
      </div>

      <div className="flex justify-between text-gray-400 md:text-left text-lg">
        
        <h4 className="text-lg ">
          Product & Brand designer
        </h4>
 
      </div>
    </section>
  );
};

export default Intro;
