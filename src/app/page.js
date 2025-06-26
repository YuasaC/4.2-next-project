"use client";

import Link from "next/link";
import { useState } from "react"
import styles from "./page.module.css";

function Greeting(props) {
  return <h1 className={styles.greeting}>Hello,{props.name}!</h1>;
}

function ClickExample() {
  const handleClick = () => {
    alert("ボタンがクリックされました！");
  };
  return <button className={styles.button} onClick={handleClick}>Click Me</button>;
}

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div className={styles.container}>
      <Greeting name="Next.js" />
      <div>
        <p>カウンター:{counter}</p>
        <button className={styles.button} onClick={() => setCounter(counter + 1)}>
          カウントアップ
        </button>
      </div>
      <ClickExample />
      {/* ナビゲーションメニュー */}
      <nav style={{ marginTop: "2rem" }}>
        <ul style={{ listStyle: "none", display: "flex", gap: "1rem" }}>
          <li className={styles.navItem}>
            <Link href={"/"}>ホーム</Link>
          </li>
          <li className={styles.navItem}>
            <Link href={"/about"}>アバウト</Link >
          </li>
          <li className={styles.navItem}>
            <Link href={"/contact"}>コンタクト</Link>
          </li>
        </ul>
      </nav>
    </div> //className={styles.container}
  );
}