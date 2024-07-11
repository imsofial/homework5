// components/BackgroundImage.tsx
import React from "react";
import styles from "../styles/BackgroundImage.module.css";
import Image from "next/image";

type ImageLoaderParams = {
  src: string;
  width: number;
  quality?: number;
};

const imageLoader = ({ src, width, quality }: ImageLoaderParams): string => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const BackgroundImage: React.FC = () => {
  return (
    <div className={styles.bgImg}>
      <Image loader={imageLoader} src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/me.png`} alt="Background" fill={true}/>
    </div>
  );
};

export default BackgroundImage;
