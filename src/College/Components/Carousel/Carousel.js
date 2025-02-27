import React from "react";
import styles from "../../styles/Carousal2.module.css";
import data from "./data.json";
import Card from "./Card";
import { useRef, useEffect } from "react";
import leaf1 from "../../assets/__before.png";
import leaf2 from "../../assets/__before-2.png";

const Carousel = () => {
  const reviews = data.reviews;
  const boxRef = useRef(null);

  const btnprev = () => {
    const box = boxRef.current;
    if (box) {
      const itemWidth = box.querySelector(`.${styles.card}`).clientWidth;
      box.scrollLeft = box.scrollLeft - itemWidth;
      console.log(itemWidth);
    }
  };

  const btnpost = () => {
    const box = boxRef.current;
    if (box) {
      const itemWidth = box.querySelector(`.${styles.card}`).clientWidth;
      box.scrollLeft = box.scrollLeft + itemWidth;
      console.log(itemWidth);
    }
  };

  useEffect(() => {
    const box = boxRef.current;
    if (box) {
      box.scrollLeft = 0;
    }
  }, []);
  return (
    <div className={styles.contain}>
      {" "}
      <img
        src={leaf1}
        alt="pic"
        className={styles.pic1}
      />
      <img
        src={leaf2}
        alt="pic"
        className={styles.pic2}
      />
      <div className={styles.container}>
        <div className={styles.TxtWrapper}>
          <p>What our consumer say</p>
        </div>
        <button
          className={styles.prebtn}
          onClick={btnprev}>
          <span class="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <button
          className={styles.postbtn}
          onClick={btnpost}>
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
        <div
          className={styles.Carousel}
          ref={boxRef}>
          {reviews.map((data, index) => (
            <Card
              {...data}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
