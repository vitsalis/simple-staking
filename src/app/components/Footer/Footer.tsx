import {
  BsGithub,
  BsTelegram,
  BsLinkedin,
  BsMedium,
  BsDiscord,
} from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { MdAlternateEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdBook } from "react-icons/io";

const iconLinks = [
  {
    name: "Website",
    url: "https://babylonchain.io",
    Icon: GoHome,
  },
  {
    name: "X",
    url: "https://twitter.com/babylon_chain",
    Icon: FaXTwitter,
  },
  {
    name: "GitHub",
    url: "https://github.com/babylonchain",
    Icon: BsGithub,
  },
  {
    name: "Telegram",
    url: "https://t.me/babyloncommunity",
    Icon: BsTelegram,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/company/babylon-chain/",
    Icon: BsLinkedin,
  },
  {
    name: "Medium",
    url: "https://medium.com/babylonchain-io",
    Icon: BsMedium,
  },
  {
    name: "Docs",
    url: "https://docs.babylonchain.io/",
    Icon: IoMdBook,
  },
  {
    name: "Email",
    url: "mailto:contact@babylonchain.io",
    Icon: MdAlternateEmail,
  },
  {
    name: "Discord",
    url: "https://discord.com/invite/babylonglobal",
    Icon: BsDiscord,
  },
];

const textLinks = [
  {
    name: "Terms",
    url: "/babylonchain_terms_of_use.doc",
    isExternal: false,
  },
];

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="w-24">
        <div className="divider my-1" />
      </div>
      <div className="flex justify-center gap-8 p-2">
        {textLinks.map(({ name, url, isExternal }) => (
          <div
            key={name}
            className="flex w-4 items-center justify-center text-sm"
          >
            <a
              href={url}
              target={isExternal ? "_blank" : "_self"}
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              {name}
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-8 p-4 pt-2 md:flex-row md:p-6 md:pt-2">
        {iconLinks.map(({ name, url, Icon }) => (
          <div
            key={name}
            className="flex w-4 items-center justify-center text-[22px] text-xl"
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
            >
              <Icon title={name} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
