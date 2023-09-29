import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";
import Image from "next/image";
import Link from "next/link";
import Linkedin from "./linkedin";

import Moonchou from "../public/assets/blog/dynamic-routing/covers2.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-400 fixed -z-50 bottom-0">
      <Container>
        <div className="py-8 w-full mx-auto md:flex md:items-center md:justify-between  ">
          <div className="pb-4">
            <h4>© 2023 Moon Chou. All Rights Reserved.</h4>
            <p>
              Last updated by Moon on September 26, 2023, 1:27 AM Kuala Lumpur
            </p>
          </div>
          <div className="flex flex-wrap items-center md:justify-between">
            <Link href="/" className="hover:underline mr-4">
              Works
            </Link>
            <Link href="/posts/about-moonchou" className="hover:underline mr-4">
              About
            </Link>
            <Linkedin></Linkedin>
          </div>
        </div>

        <Image
          src={Moonchou}
          alt="Picture of the author"
          className=" w-auto fill-slate-300 "
        />
      </Container>
    </footer>
  );
};

export default Footer;
