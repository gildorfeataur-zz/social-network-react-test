import React from "react";
import classNames from "classnames";

import styles from "./index.module.scss";

function Paginator({ currentPage, changePage, usersTotalCount, itemsPerPage }) {
  let totalPages = Math.ceil(usersTotalCount / itemsPerPage);
  let buttons = [];
  const [start, setStart] = React.useState(1);
  const [buttonsPerPage, setButtonsPerPage] = React.useState(itemsPerPage);

  if (currentPage === buttonsPerPage) {
    setStart(buttonsPerPage);
    setButtonsPerPage(buttonsPerPage + itemsPerPage);
  }

  for (let index = start; index <= totalPages; index++) {
    if (index <= buttonsPerPage) {
      buttons.push(index);
    }
    if (index === totalPages) {
      break;
    }
  }

  React.useEffect(() => {
    if (currentPage === 1) {
      setStart(1);
      setButtonsPerPage(itemsPerPage);
    }
  }, [currentPage, totalPages, itemsPerPage]);

  return (
    <div className={styles.paginator}>
      <button
        className={styles.paginatorBtn}
        value="prev"
        onClick={() => {
          changePage(currentPage - 1);
        }}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      <div className={styles.paginatorPages}>
        {currentPage >= itemsPerPage ? (
          <button
            key={1}
            className={classNames(styles.firstBtn, {
              [styles.isActive]: currentPage === 1,
            })}
            onClick={() => {
              changePage(1);
            }}
          >
            1
          </button>
        ) : null}

        {buttons.map((item) => {
          return (
            <button
              key={item}
              className={currentPage === item ? styles.isActive : null}
              onClick={() => changePage(item)}
            >
              {item}
            </button>
          );
        })}

        {currentPage !== totalPages ? (
          <button
            key={totalPages}
            className={classNames(styles.lastBtn, {
              [styles.isActive]: currentPage === totalPages,
            })}
            onClick={() => changePage(totalPages)}
          >
            {totalPages}
          </button>
        ) : null}
      </div>

      <button
        className={styles.paginatorBtn}
        value="next"
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
}

export default Paginator;
