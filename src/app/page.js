import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (



    <div className={styles.page}>
    
    <h1>Hello world</h1><div className={styles.page}>
      <main className={styles.main}>




          <nav className={styles.nav}>
          <a href="https://one.iu.edu/" target="blank">One IU  </a> <br></br>
          <a href="/about">About</a> <br></br>
          <a href="/contact">Contact</a>
          </nav>





          <div className={styles.description1}>
            <img src="https://img.pokemondb.net/artwork/avif/goodra.avif" alt="IU Logo" width={100} height={100} />
            <ul>
              <li>
            This is the not  Pokemon.
            </li>
            </ul>
            </div>
            


          <Image
          className={styles.logo}
          src="/vercel.svg"
          alt="Vercel logo"
          width={100}
          height={24}
          priority />

        <h1 className={styles.title}>
          Welcome to My Class<a href="https://nextjs.org">Next.js 13!</a>
        </h1>


            <Image
              src="https://static.wikia.nocookie.net/pokemon/images/7/76/Ash_anime_The_Beginning.png/revision/latest?cb=20110507193331"
              alt="Ash Pokemon"
              width={600}
              height={600}
              priority
            />
            <br></br>



            <Image
            src="https://snworksceo.imgix.net/ids/4c3b9110-6c1e-46b2-95c9-3829438c7977.sized-1000x1000.jpg?w=1000"
            alt="File icon1"
            width={600}
            height={600}
            priority
             />

           
            <Image
              src="/rouen-cathedral-9787080_1280.jpg"
              alt="Rouen Cathedral"
              width={600}
              height={600}
              priority
            />

<table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Jane</td>
          <td>30</td>
        </tr>
      </tbody>
    </table>


        <ul>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ul>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20} />

            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        > Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16} />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16} />
          Go to nextjs.org →
        </a>



      </footer>
    </div>    
    
    </div>
  );
}
