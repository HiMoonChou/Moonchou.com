import Image from "next/image";

import { FadeIn, FadeInStagger } from "./FadeIn";
import logoAmazon from "../public/assets/clients/amazon.png";
import logoIqiyi from "../public/assets/clients/iqiyi.png";
import logoZiroom from "../public/assets/clients/ziroom.png";
import logoTerra from "../public/assets/clients/terra.png";
import logoTiktok from "../public/assets/clients/tiktok.png";
import logoProya from "../public/assets/clients/proya.png";

const clients = [
  ["Amazon", logoAmazon],
  ["Iqiyi", logoIqiyi],
  ["Ziroom", logoZiroom],
  ["Terra", logoTerra],
  ["Tiktok", logoTiktok],
  ["Proya", logoProya],
];

export const Clients = () => {
  return (
    <div className="mb-16">
      <FadeInStagger className="mt-16" faste>
        <div className="relative m-auto items-center  overflow-hidden  before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,black_0%,rgba(0,0,0,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,black_0%,rgba(0,0,0,0)_100%)] after:content-['']">
          <div className="animate-infinite-slider flex w-[calc(250px*10)]">
            {clients.map(([client, logo], index) => (
              <div
                className="slide mr-32 w-[120px] flex items-center justify-center"
                key={`${client}-${index}`}
              >
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </div>
            ))}
            {clients.map(([client, logo], index) => (
              <div
                className="slide mr-32 w-[120px] flex items-center justify-center"
                key={`${client}-${index}`}
              >
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </div>
            ))}
          </div>
        </div>
      </FadeInStagger>
    </div>
  );
};

export default Clients;
