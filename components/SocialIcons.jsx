import Link from "next/link";
//icons
import {
  RiTwitterFill,
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinFill,
  RiFacebookFill,
} from "react-icons/ri";

const SocialIcons = () => {
  return (
    <div className="flex gap-4 lg:gap-6 pr-4">
      <Link
        href="https://www.linkedin.com/in/thesakibdev"
        target="_blank"
        className="bg-[#08d9d6] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500"
      >
        <RiLinkedinFill />
      </Link>
      <Link
        href="https://www.instagram.com/thesakibdev"
        target="_blank"
        className="bg-[#f08a5d] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500"
      >
        <RiInstagramFill />
      </Link>
      <Link
        href="https://www.facebook.com/thesakibdev"
        target="_blank"
        className="bg-[#ff2e63] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500"
      >
        <RiFacebookFill />
      </Link>
      <Link
        href="https://x.com/thesakibdev"
        target="_blank"
        className="bg-[#f9ed69] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500"
      >
        <RiTwitterFill />
      </Link>
      <Link
        href="https://github.com/thesakibdev"
        target="_blank"
        className="bg-[#5272f2] p-2 text-primary text-lg rounded-full rounded-bl-none hover:bg-white hover:text-secondary hover:-translate-y-1 transition-all duration-500"
      >
        <RiGithubFill />
      </Link>
    </div>
  );
};

export default SocialIcons;
