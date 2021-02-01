import Link from "next/link";
import { useState } from "react";
import cn from "classnames";

export default function Header() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <header className="bg-white-600 shadow-2xl">
      <div className="flex flex-wrap items-center justify-between lg:container px-4 py-6 mx-auto md:flex-no-wrap md:px-6">
        <div className="flex items-center">
          <Link href="/">
            <a className="flex text-lg md:text-xl font-mono ml-3 text-white">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
              {'   '}Home
            </a>
          </Link>
        </div>

        <button
          className="flex items-center  px-3 py-2 text-white border border-white rounded md:hidden"
          onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        >
          <svg
            className="w-3 h-3 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <ul
          className={cn(
            "md:flex flex-col md:flex-row md:items-center md:justify-center text-sm font-mono w-full md:w-auto",
            mobileMenuIsOpen ? `block` : `hidden`
          )}
        >
          {[
            { title: "ホームページ", route: "/" },
            { title: "ログイン", route: "/login" },
            { title: "登録", route: "/signin" },
            { title: "お問い合わせ", route: "/about" },
          ].map(({ route, title }) => (
            <li className="mt-3 md:mt-0 md:ml-6" key={title}>
              <Link href={route}>
                <a className="block text-white">{title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}