import Link from "next/link";
import Linkedin from "./linkedin";
import MoonchouLogo from "../public/assets/blog/icons/moonchou.svg";
import { useRouter } from "next/router";


const tabsGroup = [

  {
    name: "Works",
    key: "/"
  },

  {
    name: "About",
    key: "/posts/0.about-moonchou",
  },

  {
    name: "Labs",
    key: "/labs",
  },

]

const Header = () => {

  const router = useRouter();

  return (
    <div className=" flex flex-col my-4 md:my-12">
      <MoonchouLogo onClick={() => router.push("/posts/0.about-moonchou")} className=" text-white cursor-pointer w-full" />
      <hr className="border-1 border-gray-400 pb-4 mt-4 " />
      <div className=" flex justify-between">
        <ul className=" flex gap-16">
          {tabsGroup.map((item) => {
            const selectedTab = router.asPath === item.key
            return (
              <li key={item.key}>
                <div onClick={() => router.push(item.key)}
                  className={`cursor-pointer text-lg hover:text-white ${selectedTab ? "text-white" : " text-slate-400 font-light"}`}>{item.name}</div>
              </li>
            )
          }
          )}
        </ul>
        <div className=" text-slate-400 text-lg font-light"> <Linkedin /></div>

      </div>



    </div>
  );
};

export default Header;
