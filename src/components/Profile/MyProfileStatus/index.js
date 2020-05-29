import React from "react";

import styles from "./index.module.scss";

function MyProfileStatus({ myProfileData, userStatus, updateStatus }) {
  const [editable, setEditable] = React.useState(false);
  const [status, setStatus] = React.useState();

  function toggleStatusEdit() {
    setEditable(!editable);
    setStatus(userStatus);
    if (status !== userStatus && status !== undefined) {
      updateStatus(myProfileData.id, status);
    }
  }

  function handleStatusChange(e) {
    setStatus(e.target.value);
  }

  React.useMemo(() => {
    setStatus(userStatus);
  }, [userStatus]);

  return (
    <div className={styles.container}>
      <p onClick={toggleStatusEdit}>
        User status: {userStatus ? userStatus : `loading...`}
      </p>
      {editable ? (
        <input
          type="text"
          value={status}
          onChange={handleStatusChange}
          onBlur={toggleStatusEdit}
          autoFocus={true}
        />
      ) : null}
    </div>
  );
}

export default MyProfileStatus;
