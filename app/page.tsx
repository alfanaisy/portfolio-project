import Navbar from './components/Navbar';
import ProjectItem from './components/ProjectItem';

export default function Home() {
  return (
    <div className="px-12 lg:px-32 xl:px-40 overflow-hidden">
      <Navbar />
      <main className="h-[10000px]">
        <section className="lg:py-20 mt-10">
          <h1 className="text-lg lg:text-5xl xl:text-7xl font-bold animation-slide-up animation-delay-2">
            Web Development. Backend. Frontend. APIs. Databases. Scalable
            Solutions.
          </h1>
        </section>
        <section className="py-20 flex flex-col lg:flex-row lg:flex-wrap lg:justify-between gap-y-32 animation-slide-up animation-delay-3">
          <ProjectItem />
          <ProjectItem />
          <ProjectItem />
        </section>
      </main>
    </div>
  );
}
