import React from "react";
import style from "../styles/Contacts.module.css";
import Link from "next/link";
import Image from "next/image";

const Contacts: React.FC = () => (
  <section className={style.me}>
    <h1 className={style.me__note}>Contacts</h1>
    <hr className={style.he} />
    <ul className={style.works__list}>
      <li>
        <figure className={style.works__pictures}>
          <Link href="https://github.com/imsofial">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/github.png`} alt="GitHub" fill={true} />
          </Link>
        </figure>
      </li>
      <li>
        <figure className="works__pictures">
          <Link href="https://t.me/ssffffqq">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/Telegram_alternative_logo.svg.png`}
              alt="Telegram"
              height={100}
            />
          </Link>
        </figure>
      </li>
      <li>
        <figure className="works__pictures">
          <Link href="mailto:s.goryunova@innopolis.university">
            <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH}/img/email.png`} alt="Email" fill={true} />
          </Link>
        </figure>
      </li>
    </ul>
  </section>
);

export default Contacts;
