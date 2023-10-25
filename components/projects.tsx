"use client";

import { FC, ReactNode, Suspense, useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { twMerge as cn, twMerge } from "tailwind-merge";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from "next/link";
import MobileNav from "./mobile-nav";
import Image from "next/image";
import Vimeo from "@u-wave/react-vimeo";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function randomIntFromInterval(min: number, max: number): number {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

interface mbOptions {
  project: any;
}

const MobileGrid: FC<mbOptions> = ({ project }) => {
  const [option, setOption] = useState(randomIntFromInterval(1, 3));
  console.log(project.title, project.media.length);
  return (
    <div className="block lg:hidden mt-[40px]">
      {option === 1 && (
        <div className="grid grid-cols-2 gap-[17px]">
          <div className="col-span-2 aspect-video relative bg-slate-400">
            <Image
              alt="image"
              src={project.media[0].image}
              fill
              objectFit="cover"
            />
          </div>
          <div className="col-span-1 aspect-square relative bg-slate-400">
            <Image
              alt="image"
              src={project.media[1].image}
              fill
              objectFit="cover"
            />
          </div>
          <div className="col-span-1 aspect-square relative bg-slate-400">
            <Image
              alt="image"
              src={project.media[2].image}
              fill
              objectFit="cover"
            />
          </div>
        </div>
      )}

      {option === 2 && (
        <div className="grid grid-cols-2 gap-[17px]">
          <div className="col-span-1 aspect-square relative bg-slate-400">
            <Image
              alt="image"
              src={project.media[0].image}
              fill
              objectFit="cover"
            />
          </div>
          <div className="col-span-1 aspect-square relative bg-slate-400">
            <Image
              alt="image"
              src={project.media[1].image}
              fill
              objectFit="cover"
            />
          </div>
          <div className="col-span-1 aspect-square relative bg-slate-400">
            <Image
              alt="image"
              src={project.media[2].image}
              fill
              objectFit="cover"
            />
          </div>
          <div className="col-span-1 aspect-square relative bg-slate-400">
            <Image
              alt="image"
              src={project.media[3].image}
              fill
              objectFit="cover"
            />
          </div>
        </div>
      )}

      {option === 3 && (
        <div className="grid grid-cols-2 gap-[17px]">
          <div className="col-span-2 aspect-video relative bg-slate-400">
            <Image
              alt="image"
              src={project.media[0].image}
              fill
              objectFit="cover"
            />
          </div>
          <div className="col-span-2 aspect-video relative bg-slate-400">
            <Image
              alt="image"
              src={project.media[1].image}
              fill
              objectFit="cover"
            />
          </div>
        </div>
      )}
    </div>
  );
};

interface projectProps {
  projects: any[];
}

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
  const [p, setP] = useState(0);
  const [pr, SetPr] = useState(projects[0]);
  const [domLoaded, setDomLoaded] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <>
          <div className="fixed top-0 left-0 right-0 z-50 bg-light dark:bg-dark">
            <MobileNav mode={mode} setMode={setMode} />
          </div>
          <div className="mt-[80px]">
            <div className="hidden lg:flex h-[65px] w-full justify-around md:justify-end md:gap-[46px] items-center md:px-[160px]">
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
              <div className="">
                <Carousel
                  showArrows={false}
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={false}
                  useKeyboardArrows
                  infiniteLoop
                  onChange={(index) => setP(index)}
                  interval={5000}
                  centerMode
                  swipeable
                  emulateTouch
                  selectedItem={p}
                  onClickItem={() =>
                    (window.location.href = `/work/${projects[p].slug}`)
                  }
                >
                  {projects.map((project, idx) => (
                    <div key={idx} onClick={() => setP(idx)}>
                      <div
                        key={idx}
                        className={twMerge(
                          "aspect-square lg:aspect-video relative cursor-grab active:cursor-grabbing focus:cursor-grabbing"
                        )}
                      >
                        <Image
                          src={project.cover}
                          alt=""
                          fill
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  ))}
                </Carousel>
                <div
                  className={twMerge(
                    "mt-[29px] justify-between text-start flex transition-all duration-300 delay-400 mx-[24px] md:mx-[160px]"
                  )}
                >
                  <div className="group cursor-pointer max-w-2xl">
                    <a href={`work/${projects[p].slug}`}>
                      <p className="text-[20px] md:text-[32px] font-[700] mt-0 inline-block leading-6 md:leading-10">
                        <span className="group-hover:bg-[#252EFF] group-hover:text-white">
                          {projects[p].client}
                        </span>
                      </p>
                      <p className="text-[20px] md:text-[32px] leading-6 md:leading-10">
                        <span className="group-hover:bg-[#252EFF] group-hover:text-white">
                          {projects[p].title}
                        </span>
                      </p>
                    </a>
                  </div>
                  <p className="font-thin leading-4 md:leading-10">
                    {p + 1}/{projects.length}
                  </p>
                </div>
              </div>
            )}

            {mode === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-[33px] gap-y-[38px] mx-[24px] md:mx-[160px]">
                {projects.map((project, idx) => (
                  <Link href={`work/${project.slug}`} key={idx}>
                    <div className="relative group">
                      <MobileGrid project={project} />
                      <img
                        src={project.cover}
                        className="aspect-video w-full hidden lg:block"
                      />
                      <div className="cursor-pointer mt-[16px] leading-6">
                        <Link href={`work/${project.slug}`}>
                          <p className="text-[24px] md:text-[20px] font-[700]  inline-block">
                            <span className="group-hover:bg-[#252EFF] group-hover:text-white">
                              {project.client}
                            </span>
                          </p>
                          <br />
                          <p className="text-[24px] md:text-[20px] inline-block">
                            <span className="group-hover:bg-[#252EFF] group-hover:text-white">
                              {project.title}
                            </span>
                          </p>
                        </Link>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {mode === 3 && (
              <div className="grid grid-cols-1 gap-4 lg:gap-12 mt-12 mx-[24px] md:mx-[160px] relative mb-[200px]">
                {projects.map((project, idx) => (
                  <div className=" group flex justify-between" key={idx}>
                    <div className=" cursor-pointer mt-[16px] z-20 max-w-lg leading-9">
                      <Link href={`work/${project.slug}`}>
                        <p className="text-[24px] md:text-[32px] font-[700]  inline-block">
                          <span className="group-hover:bg-[#252EFF] group-hover:text-white">
                            {project.client}
                          </span>
                        </p>
                        <br />
                        <p className="text-[24px] md:text-[32px]  inline-block">
                          <span className="group-hover:bg-[#252EFF] group-hover:text-white">
                            {project.title}
                          </span>
                        </p>
                      </Link>
                    </div>
                    <div className="absolute right-0 z-10">
                      <div className="hidden lg:block opacity-0 aspect-video w-96 bg-slate-300 group-hover:opacity-100 transition-all relative">
                        <Image src={project.cover} fill alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default Projects;
