import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="px-40">
      <Navbar />
      <main className="py-20">
        <h1 className="text-7xl font-bold m-0 p-0 h-screen">Hello World</h1>
      </main>
    </div>
  );
}
