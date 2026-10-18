
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-12 px-6 py-8">

      <nav className="flex flex-row flex-wrap items-center justify-evenly gap-3 rounded-xl p-2 text-white/90">
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/experience">Experience</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">

        <section className="hero">
          <h1 className="flex items-center text-4xl font-bold md:text-6xl">
            Building things that matter
          </h1>

          <p className="mt-4 text-sm md:text-base">
            Delivering on time
          </p>
        </section>

        <Image
          src="/Arteta.png"
          alt="Profile picture"
          width={400}
          height={400}
          className="mx-auto h-auto w-full max-w-sm rounded-full object-cover"
        />

      </div>

      <div className="flex flex-row flex-wrap justify-evenly gap-4 p-2">
        <Link href="/projects">See my projects</Link>
        <Link href="/contact">Lets talk</Link>
      </div>

    </main>
  );
}
