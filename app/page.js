import Link from "next/link";

export default function Home() {
  return (
  <div>
    <nav className=" flex m-1 p-1 justify-between ">
      <Link href="/" className="font-bold" target="_blank" rel="noopener noreferrer">Ethan Butler</Link>
      <div>
      <a className="p-1 font-semibold" href="https://github.com/InternetEthan" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a className="p-1 font-semibold" href="https://www.linkedin.com/in/ethan-b-468446a8/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
    </nav>
    <main className="flex min-h-screen items-center">
      <section className="w-full p-5">
        <Link
          href="/aboutMe"
          className=""
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            About Me
            <span className="">
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Duis et sem felis. Aenean congue nisi sit amet bibendum porttitor. Donec et dolor volutpat, hendrerit lacus eu, bibendum odio.
          </p>
        </Link>

        <Link
          href="/Projects"
          className=""
          rel="noopener noreferrer"
        >
          <h2 className={`m-3 text-2xl font-semibold`}>
            Projects
            <span className="">
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Praesent quis fringilla arcu. Nam id felis aliquam odio ultricies maximus. Aenean ut ullamcorper neque. Vivamus eleifend ante non luctus posuere.
          </p>
        </Link>

        <Link
          href="/Resume"
          className=""
          rel="noopener noreferrer"
        >
          <h2 className={`m-3 text-2xl font-semibold`}>
            Resume
            <span className="">
            </span>
          </h2>
          <p className={`m-0 text-sm opacity-50`}>
            Fusce posuere consequat leo, non elementum urna pharetra vel.
          </p>
        </Link>

      </section>
      <section className="w-full p-5">
        <p>
        Donec suscipit turpis vitae velit euismod, et vulputate ligula varius. Phasellus tempor leo nec velit venenatis, ut aliquam erat bibendum. Mauris facilisis, elit ut venenatis suscipit, tellus nunc mattis mi, at maximus leo sem et velit. Nam gravida dignissim placerat. Praesent vestibulum, libero eget convallis luctus, lectus massa convallis orci, eget feugiat neque mi quis mi. Duis diam est, porttitor at volutpat quis, volutpat non massa. Nunc in orci tortor.
      </p>
      </section>
    </main>
  </div>
  );
}
