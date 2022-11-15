import React, { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import classes from "./ProfileForm.module.css";
import { useHistory } from "react-router-dom";

const ProfileForm = () => {
 const authCtx = useContext(AuthContext);
  const enteredPasswordRef = useRef();
  const history = useHistory();

  const onSubmitFormHandler = (event) => {
    event.preventDefault();

    const enteredPassword = enteredPasswordRef.current.value;

    const changePasswordFetch = async () => {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCP84Ffvb-W9L4qN6sT3uVzJBmWXNJ88NM",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: authCtx.token,
            password : enteredPassword,
            returnSecureToken : true
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
      );

      if (response.ok) {
        console.log('Good!');
        history.replace('/');
      } else {
        console.log('Wrong!');
      }
    };

    changePasswordFetch();
  };

  return (
    <form className={classes.form} onSubmit={onSubmitFormHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={enteredPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
