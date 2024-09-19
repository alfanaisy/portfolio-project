import Link from 'next/link';
import ProjectItem from './components/ProjectItem';
import CopyEmail from './components/CopyEmail';

const projects = [
  {
    id: 1,
    title: 'Game Hub',
    subtitle: 'A Video Game catalogue',
    imageSrc: '/game-hub.png',
    imageDesc: 'Game Hub pic',
    url: 'https://game-app-ecru.vercel.app/',
  },
  {
    id: 2,
    title: 'CRWN Clothing',
    subtitle: 'A Fashion e-commerce',
    imageSrc: '/crwn-clothing.png',
    imageDesc: 'CRWN Clothing pic',
    url: 'https://unique-baklava-008a47.netlify.app/',
  },
  {
    id: 3,
    title: 'Chill App',
    subtitle: 'A Netfilx UI Clone',
    imageSrc: '/chill-app.png',
    imageDesc: 'Chill App pic',
    url: 'https://chill-app.netlify.app/',
  },
];

export default function Home() {
  return (
    <main className="">
      <section className="lg:py-20 mt-10">
        <h1 className="text-lg md:text-3xl lg:text-5xl xl:text-7xl font-bold animation-slide-up animation-delay-2">
          Web Development. Backend. Frontend. APIs. Databases. Scalable
          Solutions.
        </h1>
      </section>

      <section>
        <div className="py-20 flex flex-col lg:flex-row lg:flex-wrap lg:justify-between gap-y-32 animation-slide-up animation-delay-3">
          {projects.map(({ id, title, subtitle, imageSrc, imageDesc, url }) => (
            <ProjectItem
              key={id}
              imageSrc={imageSrc}
              imageDesc={imageDesc}
              title={title}
              subtitle={subtitle}
              url={url}
            />
          ))}
        </div>
        <h4 className="text-center text-xl lg:text-3xl font-medium my-16">
          See more on my{' '}
          <span className="hover:underline">
            <Link href={'https://github.com/alfanaisy'} target="_blank">
              Github
            </Link>
          </span>
        </h4>
      </section>

      <section className="py-20 lg:px-36 space-y-4">
        <p className="text-lg text-left leading-relaxed ">
          I&apos;m Alfan, a full-stack web developer with a passion for building
          dynamic, scalable web applications. With a strong foundation in both
          front-end and back-end technologies, I specialize in delivering clean,
          efficient code that aligns with modern web standards. Whether creating
          responsive user interfaces or designing robust APIs, I thrive on
          solving complex problems and continuously expanding my expertise.
        </p>
        <p className="text-left text-lg hover:underline font-bold inline-block">
          <Link href={'/about'}>More about me</Link>
        </p>
      </section>
      <section className="py-10 mb-28 lg:px-36">
        <h5 className="text-lg lg:text-2xl md:text-xl font-medium lg:mb-2 inline-block">
          Get in touch (click to copy)
        </h5>
        <CopyEmail style="text-xl md:text-3xl lg:text-5xl font-bold" />
      </section>
    </main>
  );
}
