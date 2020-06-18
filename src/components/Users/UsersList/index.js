import React from "react";
import UsersBlock from "../UsersBlock";
import Preloader from "../../Preloader";
import classNames from "classnames";

import styles from "./index.module.scss";

function UsersList({ data, changeFollowing, changePage }) {
  let totalPages = Math.ceil(data.usersTotalCount / data.itemsPerPage);
  let buttons = [];
  const [start, setStart] = React.useState(1);
  const [buttonsPerPage, setButtonsPerPage] = React.useState(10);

  if (data.currentPage === buttonsPerPage) {
    setStart(buttonsPerPage);
    setButtonsPerPage(buttonsPerPage + 10);
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
    if (data.currentPage === 1) {
      setStart(1);
      setButtonsPerPage(10);
    }
  }, [data.currentPage, totalPages]);

  return (
    <section className={styles.container}>
      <h2>Users list</h2>

      <div className={styles.paginator}>
        <button
          className={styles.paginatorBtn}
          value="prev"
          onClick={() => {
            changePage(data.currentPage - 1);
          }}
          disabled={data.currentPage === 1}
        >
          Prev
        </button>

        <div className={styles.paginatorPages}>
          {data.currentPage >= 10 ? (
            <button
              key={1}
              className={classNames(styles.firstBtn, {
                [styles.isActive]: data.currentPage === 1,
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
                className={data.currentPage === item ? styles.isActive : null}
                onClick={() => changePage(item)}
              >
                {item}
              </button>
            );
          })}

          {data.currentPage !== totalPages ? (
            <button
              key={totalPages}
              className={classNames(styles.lastBtn, {
                [styles.isActive]: data.currentPage === totalPages,
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
          onClick={() => changePage(data.currentPage + 1)}
        >
          Next
        </button>
      </div>

      {data.isFetching ? (
        <Preloader />
      ) : (
        <div className={styles.list}>
          {data.users.map((user) => (
            <UsersBlock
              key={user.id}
              user={user}
              changeFollowing={changeFollowing}
              {...data}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default UsersList;
