import React from "react";
import styles from "../styles/AboutMe.module.css";
import Image from "next/image";

type ImageLoaderParams = {
  src: string;
  width: number;
  quality?: number;
};

const imageLoader = ({ src, width, quality }: ImageLoaderParams): string => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};
const AboutMe: React.FC = () => (
  <section className={styles.me}>
    <Image
      loader={imageLoader}
      src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/photo_2024-06-08_17-06-14.png`}
      alt="Sofia Goryunova"
      className={styles.me__img}
    />
    <h1 className={styles.me__note}>About me</h1>
    <hr className={styles.he} />
    <p className={styles.text}>
      My name is Sofia Goryunova. I am 19 y.o. I study at Innopolis University
      from 2023 year. I became interested in programming in 3rd grade when
      started attending a programming club. The first programming language that
      I was lucky enough to learn was QBasic. Then at 9 grade I decided to
      become a professional programmer and started to prepare for exams. That
      was the moment when I learned Python. I also take a lot of courses such as
      2D games on python, data science on python, web development courses, etc.
    </p>
  </section>
);

export default AboutMe;
