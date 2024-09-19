import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  imageSrc: string;
  imageDesc: string;
  title: string;
  subtitle: string;
  url: string;
}

const ProjectItem = ({ imageSrc, imageDesc, title, subtitle, url }: Props) => {
  return (
    <div className="group relative w-full lg:w-[calc(50%-60px)] h-[80vh] z-10 cursor-pointer lg:project-item">
      <div className="w-full h-full rounded-3xl overflow-hidden group-hover:scale-[98%] duration-700">
        <Image
          src={imageSrc}
          alt={imageDesc}
          fill={true}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="rounded-3xl group-hover:scale-110 duration-700"
        />
      </div>
      <div className="text-black text-center mt-6 text-lg gr">
        <p className="font-medium">
          <Link href={url} target="_blank">
            {title}
          </Link>
        </p>
        <p className="font-extralight text-slate-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
