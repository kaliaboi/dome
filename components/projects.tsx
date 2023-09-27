"use client";

import { FC, ReactNode, Suspense, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { twMerge as cn } from "tailwind-merge";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import Image from "next/image";
import Vimeo from "@u-wave/react-vimeo";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface projectProps {
  projects: any[];
}

// const projects = [
//   {
//     client: "Museum of the City of New York",
//     title: "This is New York",
//     image: "/mcny.jpg",
//     link: "/mcny",
//   },
//   {
//     client: "Electronic Arts",
//     title: "40 years of pioneering video games",
//     image: "/ears2.jpg",
//     link: "/ears",
//   },
//   {
//     client: "Cleveland Museum of Art",
//     title: "Revealing Krishna",
//     image: "/krishna_hero.jpg",
//     link: "/krishna",
//   },
// ];

const Switcher = ({
  mode,
  children,
  activeMode,
  onClick,
}: {
  mode: number;
  activeMode: number;
  children: ReactNode;
  onClick: () => void;
}) => {
  return (
    <p
      className={cn(
        "font-[300] text-[14px] md:text-[21px] uppercase md:upppercase tracking-wider opacity-60 hover:opacity-100 cursor-pointer transition-all duration-300 hover:bg-[#252EFF] hover:text-white p-2 m-2",
        activeMode === mode && "opacity-100"
      )}
      onClick={onClick}
    >
      {children}
    </p>
  );
};

const Projects: FC<projectProps> = ({ projects }) => {
  const [mode, setMode] = useState<1 | 2 | 3>(1);
  const [project, setProject] = useState(0);

  return (
    <>
      <MobileNav />
      <div className="md:mx-[160px]">
        <div className="hidden lg:flex h-[65px] w-full justify-around md:justify-end md:gap-[46px] items-center">
          <Switcher activeMode={mode} mode={1} onClick={() => setMode(1)}>
            Slides
          </Switcher>
          <Switcher activeMode={mode} mode={2} onClick={() => setMode(2)}>
            Grid
          </Switcher>
          <Switcher activeMode={mode} mode={3} onClick={() => setMode(3)}>
            List
          </Switcher>
        </div>
        {mode === 1 && (
          <>
            <Carousel
              showArrows={true}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop
              onChange={(index) => setProject(index)}
              interval={5000}
            >
              {projects.map((project, idx) => (
                // <Link href={`work/${project.slug}`} key={idx}>
                //   <iframe
                //     src="https://player.vimeo.com/video/866418842?h=09d661d5c3"
                //     width="100%"
                //     height="100%"
                //     allow="autoplay; fullscreen"
                //     allowFullScreen
                //     style={{ margin: 0, width: "100%", height: "1000px" }}
                //   ></iframe>
                // </Link>
                // <ReactPlayer
                //   url={project.videoID}
                //   playing
                //   muted
                //   loop
                //   style={{ width: "100%", height: "1000px", margin: 0 }}
                // />
                <div key={idx}>
                  {project.videoID !== null ? (
                    <div className="player-wrapper">
                      <ReactPlayer
                        className="react-player"
                        url={project.videoID}
                        width="100%"
                        height="100%"
                        playing
                        muted
                        loop
                      />
                    </div>
                  ) : (
                    <div key={idx}>
                      <img src={project.cover} />
                    </div>
                  )}
                </div>
              ))}
            </Carousel>
            <div className="mt-[11px] mx-[25px] md:mx-0 flex justify-between max-w-full">
              <div className="group cursor-pointer">
                <Link href={`work/${projects[project].slug}`}>
                  <p className="text-[24px] md:text-[32px] font-[700] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
                    {projects[project].client}
                  </p>
                  <br />
                  <p className="text-[24px] md:text-[32px] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
                    {projects[project].title}
                  </p>
                </Link>
              </div>
              <p className="font-thin">
                {project + 1}/{projects.length}
              </p>
            </div>
          </>
        )}

        {mode === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[33px] gap-y-[38px]">
            {projects.map((project, idx) => (
              <Link href={`work/${project.slug}`} key={idx}>
                <div className="relative group">
                  <img src={project.cover} className="aspect-video w-full" />
                  <div className="cursor-pointer mt-[16px]">
                    <Link href={`work/${project.slug}`}>
                      <p className="text-[24px] md:text-[32px] font-[700] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
                        {project.client}
                      </p>
                      <br />
                      <p className="text-[24px] md:text-[32px] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
                        {project.title}
                      </p>
                    </Link>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {mode === 3 && (
          <div className="grid grid-cols-1 gap-4 lg:gap-0 lg:-space-y-14 mt-12 mx-8 lg:mx-0">
            {projects.map((project, idx) => (
              <div className=" group flex justify-between" key={idx}>
                <div className=" cursor-pointer mt-[16px]">
                  <Link href={`work/${project.slug}`}>
                    <p className="text-[24px] md:text-[32px] font-[700] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
                      {project.client}
                    </p>
                    <br />
                    <p className="text-[24px] md:text-[32px] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
                      {project.title}
                    </p>
                  </Link>
                </div>
                <div className="hidden lg:block opacity-0 aspect-video w-96 bg-slate-300 group-hover:opacity-100 transition-all relative">
                  <Image src={project.cover} fill alt="" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Projects;
