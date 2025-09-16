export default function About() {
  return (
    <div className="col-span-2 flex flex-col overflow-hidden">
      <p className="uppercase font-mono font-bold text-lg text-gray-400">
        About
      </p>
      <div className="flex-1 overflow-y-scroll pr-4 flex flex-col gap-4 mt-4 text-md">
        <p>A computer scientist and a software developer.</p>
        <p>
          Doing Bachelors in Technology (Computer Science Engineering) from
          University of Lucknow.
        </p>
        {/* <code>Citizenship: India</code> */}

        <p className="font-bold font-mono uppercase text-lg text-gray-400">
          Skills
        </p>
        <p>
          TypeScript, Python, C/C++
          <br />
          Next.js, Svelte, React.js
          <br />
          TailwindCSS, Zustand
          <br />
          Nest.js, Express.js, Flask
          <br />
          PostgreSQL, MySQL, MongoDB
          <br />
          PRISMA, SQLAlchemy
          <br />
          Figma, Docker, Git
        </p>

        <p className="font-bold font-mono uppercase text-lg text-gray-400">
          Early Life
        </p>
        <p>
          Did his XII Standard in Mathematics, Science, English, Computer,
          Physical Education and X Standard in Mathematics, Science, English,
          Computer, Social Sciences from City Montessori School, Lucknow.
        </p>
        <p>ABACUS Level 5</p>

        <p className="font-bold font-mono uppercase text-lg text-gray-400">
          Sports
        </p>
        <p>Badminton, Table Tennis</p>

        <p className="font-bold font-mono uppercase text-lg text-gray-400">
          Destinations Explored
        </p>
        <div>
          <b>India:</b>
          <p className="pl-4">
            <b>Delhi</b>
            <br />
            <b>Madhya Pradesh:</b> Gwalior(1yr)
            <br />
            <b>Maharashtra:</b> Mumbai, Nashik, Aurangabad
            <br />
            <b>Rajasthan:</b> Jaipur, Salasar, Khatu
            <br />
            <b>Uttar Pradesh:</b> Ayodhya, Bareilly(4yrs), Deoria, Noida,
            Greater Noida, Rai Bareilly, Lucknow(Home), Gorakhpur(Hometown),
            Prayagraj
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
