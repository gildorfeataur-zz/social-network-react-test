import React from "react";
import UsersBlock from "../UsersBlock";
import Preloader from "../../Preloader";

import styles from "./index.module.scss";

function UsersList({ data, changeFollowing, changePage }) {
  let totalPages = Math.ceil(data.usersTotalCount / data.itemsPerPage);
  let buttons = [];
  for (let index = 1; index <= totalPages; index++) {
    buttons.push(index);
  }
  return (
    <section className={styles.container}>
      <h2>Users list</h2>

      <div className={styles.paginator}>
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

      {data.isFetching ? (
        <Preloader />
      ) : (
        <div className={styles.list}>
          {data.users.map((user) => (
            <UsersBlock
              key={user.id}
              user={user}
              changeFollowing={changeFollowing}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default UsersList;
