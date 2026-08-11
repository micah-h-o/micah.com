import Link from "next/link"

export default function Home() {
  return (
    <article className="min-h-full flex flex-col bg-background font-sans text-sm gap-8 max-w-xs">
      <header className='flex flex-col gap-1'>
        <h1>Micah Hayes Omondi</h1>
        <p className='text-font-secondary'><time dateTime="2026-08-10">Updated on August 10, 2026</time></p>
      </header>

      <section className='flex flex-col gap-4'>
        <p>Hey, welcome to my corner of the Internet.</p>
        <p>I'm a software engineer finishing up a computer science degree at the University of Waterloo. My favourite course was CS466, a graduate course in advanced algorithms.</p>
        <p>After high school, I did Google CSSI. Then, I started building some production applications, in applied AI and fullstack engineering.</p>
        <p>I built <Link href='https://usedipole.com'>Dipole</Link>, a tool that optimizes LLM citations and search rankings for companies.</p>
        <p>I built <Link href='https://useharbory.com'>Harbory</Link>, an 
        end-to-end workflow management platform for service companies.</p>
        <p>I built <Link href='https://neulo.app'>Neulo</Link>, an AI-powered journal that surfaces insights and helps guide you
        through journaling.</p>
        <p>I'm currently looking for new opportunities.</p>
      </section>

        <ul className='flex flex-wrap gap-4'>
          <li>
            <Link 
              href='https://github.com/micah-h-o' 
              className='text-font-secondary'
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link 
              href='https://linkedin.com/in/micah-hayes-o' 
              className='text-font-secondary'
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link 
              href='https://x.com/micahomnd' 
              className='text-font-secondary'
            >
              X (Twitter)
            </Link>
          </li>
          <li>
            <Link 
              href='mailto:micah.hayes.mail@gmail.com'
              className='text-font-secondary'
            >
              Email
            </Link>
          </li>
        </ul>
    </article>
  );
}

