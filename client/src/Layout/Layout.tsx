import React, { Fragment } from "react";
import Footer from "./Footer";
import { Hero, Navbar } from "../component";
import PageHero from "./PageHero";

interface LayoutProps {
  children: React.ReactNode;
  homelayout?: boolean;
  title: string
}

export default function Layout({ children, homelayout, title }: LayoutProps) {
  return (
    <Fragment>
      <div
        className={`relative  ${
          homelayout ? "h-[40rem] background-customize lg:h-screen" : "h-[20rem] sm:h-[25rem] background-customize3"
        }`}
      >
        {/* navbar is fixed */}
        <Navbar />
        <div className="w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {homelayout ? <Hero /> : <PageHero title={title} />}
        </div>
      </div>
      <div>{children}</div>
      <Footer />
    </Fragment>
  );
}
