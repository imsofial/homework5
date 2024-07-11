// src/components/Works.tsx

import React from "react";
import styles from "../styles/Works.module.css";
import Image from "next/image";
import { isAbsolute } from "path";

const Works: React.FC = () => {
  return (
    <section className={styles.me}>
      <h1 className={styles.me__note}>Works</h1>
      <hr className={styles.he} />
      <ul className={styles.works__list}>
        <li>
          <figure className={styles.works__pictures}>
            <figcaption className={styles.caption}>study projects</figcaption>
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/фрейм 1.png`} alt="study projects" height={300}
              width={300}/>
          </figure>
        </li>
        <li>
          <figure className={styles.works__pictures}>
            <figcaption className={styles.caption}>
              2D game on python
            </figcaption>
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/2dgame.png`} alt="2D game on python" height={300}
              width={300} />
          </figure>
        </li>
        <li>
          <figure className={styles.works__pictures}>
            <figcaption className={styles.caption}>
              console calculator on pyhton
            </figcaption>
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/calc.png`}
              alt="console calculator on pyhton"
              height={300}
              width={300}
            />
          </figure>
        </li>
      </ul>
    </section>
  );
};

export default Works;
