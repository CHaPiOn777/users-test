import { FC, SetStateAction, useState } from "react";
import styles from "./Pagination.module.css";

type TTotalUsers = {
  totalUsers: number;
  paginate: (currentPage: SetStateAction<number>) => void;
};

const Pagination: FC<TTotalUsers> = ({ totalUsers, paginate }) => {
  const [activeIndex, setActiveIndex] = useState<number>(Number);
  const sizeWindow = localStorage.getItem('size');
  const counterUsersInPage = sizeWindow === 'small' ? 4 : 6;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalUsers / Number(counterUsersInPage)); i++) {
    pageNumbers.push(i);
  }
  const onClick = (index: number, number: number,e: any) => {
    e.preventDefault();
    paginate(number);
    setActiveIndex(index);
  };

  return (
    <ul className={styles.pagination}>
      {pageNumbers.map((number, index) => (
        <li className={styles.pageItem} key={index}>
          <a
            href="#"
            className={
              activeIndex === index
                ? `${styles.pageLink} ${styles.pageLinkActive}`
                : styles.pageLink
            }
            onClick={(e) => onClick(index, number, e)}
          >
            {number}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
