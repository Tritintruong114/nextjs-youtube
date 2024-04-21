import { Logo } from "@/components/elements";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="bg-transparent fixed w-full py-6">
      <div className="container flex justify-between">
        <div className="flex justify-center items-center gap-10">
          <div>
            <Logo />
          </div>
          <nav className="list-none flex items-center text-white gap-8">
            <li className="">
              <Link href="/">About us</Link>
            </li>
            <li className="">
              <Link href="/">About us</Link>
            </li>
            <li className="">
              <Link href="/">About us</Link>
            </li>
            <li className="">
              <Link href="/">About us</Link>
            </li>
          </nav>
        </div>

        <div>
          <button className="border py-3 px-5 rounded-full text-white">
            Get in touch
          </button>
        </div>
      </div>
    </header>
  );
};
