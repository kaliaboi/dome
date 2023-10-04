"use client";
import Link from "next/link";
import { FC, ReactNode, useCallback, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { twMerge as cn } from "tailwind-merge";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import MobileNav from "./mobile-nav";
import ImageViewer from "react-simple-image-viewer";
import { Cross1Icon, Cross2Icon } from "@radix-ui/react-icons";

interface projectProps {
  project: any;
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

const Mcny: FC<projectProps> = ({ project }) => {
  const [mode, setMode] = useState<1 | 2 | 3>(1);
  const [media, setMedia] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index: any) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  console.log("video", project.videoID);
  var images: any = [];
  project.media.map((p: any) => images.push(p.image));

  return (
    <>
      <MobileNav mode={mode} setMode={setMode} />
      <div className="md:pl-[160px] flex items-center">
        <Link
          href={"/"}
          className="font-[300] text-[14px] md:text-[21px] uppercase md:upppercase tracking-wider cursor-pointer transition-all duration-300 hover:bg-[#252EFF] hover:text-white p-2 m-2"
        >
          BACK
        </Link>
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
      </div>

      {mode === 1 && (
        <div className="mt-[32px]">
          {project.videoID !== null ? (
            <Carousel
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop
              centerMode
              swipeable
              useKeyboardArrows
              onChange={(index) => setMedia(index)}
              emulateTouch
              selectedItem={media}
            >
              <iframe
                src={project.videoID}
                width="100%"
                height="100%"
                allow="autoplay; fullscreen"
                allowFullScreen
                style={{ margin: 0, width: "100%" }}
              ></iframe>

              {project.media.map((m: any, idx: any) => (
                <div
                  key={idx}
                  className="cursor-grab active:cursor-grabbing focus:cursor-grabbing"
                  onClick={() => setMedia(idx)}
                >
                  <img src={m.image} />
                </div>
              ))}
            </Carousel>
          ) : (
            <Carousel
              showArrows={false}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop
              centerMode
              swipeable
              useKeyboardArrows
              onChange={(index) => setMedia(index)}
              emulateTouch
              selectedItem={media}
            >
              {project.media.map((m: any, idx: any) => (
                <div
                  key={idx}
                  className="cursor-grab active:cursor-grabbing focus:cursor-grabbing overflow-hidden"
                  onClick={() => setMedia(idx)}
                >
                  <img src={m.image} />
                </div>
              ))}
            </Carousel>
          )}

          <div className="mt-[11px] flex justify-between max-w-full md:mx-[160px] mx-[24px]">
            <div className="lg:mt-[68px]">
              <p className="text-[24px] md:text-[32px] font-[700] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
                {project.client}
              </p>
              <br />
              <p className="text-[24px] md:text-[32px] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
                {project.title}
              </p>
            </div>
            <p className="font-thin">
              {media + 1}/{project.media.length + 1}
            </p>
          </div>
        </div>
      )}

      {mode === 2 && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[33px] gap-y-[22px] md:mx-[160px] mx-[24px] mt-[32px]">
            {project.videoID !== null && (
              <div className="aspect-video w-full">
                <iframe
                  src={project.videoID}
                  width="100%"
                  height="100%"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  style={{ margin: 0, width: "100%" }}
                ></iframe>
              </div>
            )}
            {project.media.map((m: any, idx: any) => (
              <div
                className="relative cursor-zoom-in aspect-video w-full overflow-hidden"
                key={idx}
              >
                <img src={m.image} onClick={() => openImageViewer(idx)} />
              </div>
            ))}
          </div>
          <div className="lg:mt-[68px] md:mx-[160px] mx-[24px]">
            <p className="text-[24px] md:text-[32px] font-[700] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
              {project.client}
            </p>
            <br />
            <p className="text-[24px] md:text-[32px] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
              {project.title}
            </p>
          </div>
        </>
      )}

      {mode === 3 && (
        <>
          <div className="grid grid-cols-1 gap-12 md:mt-12 md:mx-[160px] mt-[32px] mx-[24px]">
            {project.media.map((m: any, idx: any) => (
              <div className="group flex justify-between" key={idx}>
                <div className="mt-[16px] max-w-[736px] cursor-zoom-in">
                  <p className="text-[24px] md:text-[32px] font-[700] inline-block">
                    Image {idx + 1}
                  </p>
                  <br />
                  <p
                    className="text-[24px] md:text-[32px]  inline-block "
                    onClick={() => openImageViewer(idx)}
                  >
                    {m.title}
                  </p>
                </div>
                <div className="hidden lg:block opacity-0 aspect-video w-96 group-hover:opacity-100 transition-all relative">
                  <Image src={m.image} fill alt="" objectFit="cover" />
                </div>
              </div>
            ))}
          </div>
          <div className="h-[1px] bg-black dark:bg-white my-[80px]"></div>
          <div className="mt-[16px] mx-[24px]">
            <p className="text-[24px] md:text-[32px] font-[700] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
              {project.client}
            </p>
            <br />
            <p className="text-[24px] md:text-[32px] group-hover:bg-[#252EFF] group-hover:text-white inline-block">
              {project.title}
            </p>
          </div>
        </>
      )}
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          leftArrowComponent={<></>}
          rightArrowComponent={<></>}
          closeComponent={
            <Cross2Icon width={36} height={36} className="opacity-100" />
          }
        />
      )}
    </>
  );
};

export default Mcny;
