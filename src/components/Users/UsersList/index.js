import React from "react";
import UsersBlock from "../UsersBlock";
import Preloader from "../../Preloader";

import styles from "./index.module.scss";
import Paginator from "../../Paginator";

function UsersList({ data, changeFollowing, changePage }) {
  return (
    <section className={styles.container}>
      <h2>Users list</h2>

      <Paginator
        currentPage={data.currentPage}
        changePage={changePage}
        usersTotalCount={data.usersTotalCount}
        itemsPerPage={data.itemsPerPage}
      />

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
