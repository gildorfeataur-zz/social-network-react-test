import React from "react";
import UsersBlock from "../UsersBlock";
import Preloader from "../../Preloader";

import styles from "./index.module.scss";

function UsersList({ data, changeFollowing, changePage }) {
  let totalPages = Math.ceil(data.usersTotalCount / data.itemsPerPage);
  let buttons = [];
  let range = 10;
  const [start, setStart] = React.useState(1);
  const [buttonsPerPage, setButtonsPerPage] = React.useState(range);

  if (data.currentPage === buttonsPerPage) {
    setStart(buttonsPerPage);
    setButtonsPerPage(buttonsPerPage + range);
  }

  for (let index = start; index <= totalPages; index++) {
    if (index <= buttonsPerPage) {
      buttons.push(index);
    }
    if (index === totalPages - 1) {
      buttons.push("...");
      buttons.push(totalPages);
    }
  }

  return (
    <section className={styles.container}>
      <h2>Users list</h2>

      <div className={styles.paginator}>
        <button
          className={styles.paginatorBtn}
          value="prev"
          onClick={() => changePage(data.currentPage - 1)}
          disabled={data.currentPage === 1}
        >
          Prev
        </button>
        <div className={styles.paginatorPages}>
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
