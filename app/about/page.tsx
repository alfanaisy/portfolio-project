import Image from 'next/image';
import React from 'react';
import { experiences, frameworks } from './data';
import CopyEmail from '../components/CopyEmail';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <div className="py-10 space-y-10">
      <h1 className="lg:px-20 xl:px-36 text-3xl lg:text-5xl lg:font-medium leading-relaxed animation-slide-up animation-delay-2">
        Full-Stack Web Developer specializing in scalable web applications and
        seamless user experiences.
      </h1>

      <div className="lg:px-20 xl:px-36 space-y-8 lg:text-lg text-justify lg:text-left leading-loose tracking-wide animation-slide-up animation-delay-3">
        <p>
          I&apos;m Alfan, a dedicated Full-Stack Web Developer with experience
          building dynamic web applications in both startup and corporate
          environments. Throughout my career, I&apos;ve worked on end-to-end
          development projects, optimizing both front-end interfaces and
          back-end systems to deliver robust, scalable solutions. I thrive in
          tackling complex challenges and delivering clean, efficient code that
          enhances user experiences.
        </p>
        <p>
          In my previous roles, I&apos;ve driven key initiatives that
          significantly improved system performance and user satisfaction. From
          planning and designing APIs to developing interactive user interfaces,
          I excel in delivering comprehensive solutions that align with both
          technical and business goals. With a deep understanding of modern web
          technologies like React, Next.js, and ASP.NET, I collaborate closely
          with cross-functional teams to ensure seamless integration between
          design, development, and deployment.
        </p>
        <p>
          My expertise lies in creating intuitive web interfaces, designing
          scalable back-end architectures, and maintaining best practices in
          code quality and security. I am passionate about pushing the
          boundaries of web development to deliver high-performance,
          user-friendly applications that meet business objectives.
        </p>
      </div>

      <div className="relative w-full lg:py-16 animation-slide-up animation-delay-3">
        <Image
          src={'/my-background-photo.png'}
          alt="My Background Photo"
          width={1600}
          height={900}
          objectFit="contain"
          objectPosition="cover"
          quality={100}
        />
      </div>

      <div className="lg:px-20 xl:px-36 py-6 animation-slide-up animation-delay-3">
        <h5 className="text-xl lg:text-3xl font-medium mb-6">
          Work Experiences
        </h5>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-rows-3 lg:grid-flow-col gap-y-8">
          {experiences.map((item) => (
            <div key={item.id} className="space-y-1">
              <p className="text-lg lg:text-2xl">{item.position}</p>
              <p className="text-md text-gray-600">@{item.company}</p>
              <p className="text-md text-gray-600">{item.year}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:px-20 xl:px-36 py-6 animation-slide-up animation-delay-3">
        <h5 className="text-xl lg:text-3xl font-medium mb-6">
          Frameworks & Libraries
        </h5>
        <div className="flex flex-col md:grid md:grid-cols-2 gap-y-2 md:gap-y-4">
          {frameworks.map((item, idx) => (
            <p key={idx}>{item}</p>
          ))}
        </div>
      </div>

      <div className="lg:px-20 xl:px-36 py-6 pb-24 animation-slide-up animation-delay-3">
        <h5 className="text-xl lg:text-3xl font-medium mb-6">Contact</h5>
        <div className="text-md lg:text-xl pb-6">
          <p>
            Feel free to reach out for projects, collaborations, or just to say
            hello!
          </p>
          <p>Currently seeking new opportunities.</p>
        </div>
        <CopyEmail style="text-md md:text-xl lg:text-2xl font-medium hover:underline" />
        <p className="text-md md:text-xl lg:text-2xl font-medium hover:underline">
          <Link href={'https://www.linkedin.com/in/alfanaisy'} target="_blank">
            LinkedIn
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
