import Link from "next/link";

const Header = () => {
  return (
    <h2 className=" text-gray-400 mix-blend-difference top-4 text-lg fixed md:text-lg content-center flex-auto tracking-tight  md:tracking-tighter leading-tight mt-2 mb-8 ">
      <Link href="/posts/about-moonchou" className=" text-white mr-8">
        About
      </Link>
      <Link href="/" className=" hover:text-white">
        Works
      </Link>
    </h2>
  );
};

export default Header;
