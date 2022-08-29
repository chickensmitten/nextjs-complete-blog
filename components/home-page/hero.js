import Image from "next/image";
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div>
        <Image src="/images/site/max.png" alt="Owner's image" width={320} height={400}/>
      </div>
      <h1>Hi, Im Max</h1>
      <p>Lorem ipsum text</p>
    </section>
  );
}

export default Hero;