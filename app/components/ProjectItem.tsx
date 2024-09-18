import Image from 'next/image';
import React from 'react';

const ProjectItem = () => {
  return (
    <div className="group relative w-full md:w-[35vw] h-[80vh] z-10 cursor-pointer ">
      <div className="w-full h-full rounded-3xl overflow-hidden group-hover:scale-[98%] duration-700">
        <Image
          src={'/game-hub.png'}
          alt={'Game Hub'}
          fill={true}
          objectFit="cover"
          objectPosition="center"
          className="rounded-3xl group-hover:scale-110 duration-700"
        />
      </div>
      <div className="text-black text-center mt-6 text-lg gr">
        <p className="font-medium">Game Hub</p>
        <p className="font-extralight text-slate-500">Video Game Catalogue</p>
      </div>
    </div>
  );
};

export default ProjectItem;
