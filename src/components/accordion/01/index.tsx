"use client";

import styles from "./styles.module.css";

type Accordion01Item = {
  id: string;
  title: string;
  subTitle: string;
  content: React.ReactNode;
};

type ItemProps = Accordion01Item;

const Accordion01Item = ({ title, subTitle, content }: ItemProps) => {
  return (
    <div class="accordion-01 js-accordion-01">
      <div class="accordion-01__head">
        <p class="accordion-01__sub-heading">
          <span>{title}</span>
        </p>
        <h3 class="accordion-01__heading">{subTitle}</h3>
        <div class="accordion-01__icon"></div>
      </div>
      <div className={styles.contentWrapper}>
        <div class="accordion-01__content">{content}</div>
      </div>
    </div>
  );
};

type Props = {
  items: Accordion01Item[];
};

export const Accordion01 = ({ items }: Props) => {
  return (
    <div>
      {items.map((item) => (
        <Accordion01Item key={item.id} {...item} />
      ))}
    </div>
  );
};
