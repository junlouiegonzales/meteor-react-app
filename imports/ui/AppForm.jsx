import React from "react";
import { useRef } from "react";
import { Accounts } from 'meteor/accounts-base'

export const AppForm = () => {
    const inputFname = useRef(null);
    const inputLname = useRef(null)
    const inputEmail = useRef(null)
    const inputPass = useRef(null)
    const inputUsername = useRef(null)

    const onSubmit = () => {
        const opts = {
            email: inputEmail.current.value,
            password: inputPass.current.value,
            isfacilityuser: true,
            firstname: inputFname.current.value,
            lastname: inputLname.current.value,
            username: inputUsername.current.value
        }
        Accounts.createUser(opts, (error) => {
            if(error) console.log(error);
            else console.log('SUCCESS');
        })
    }

  return (
    <div>
      <input ref={inputFname} name="firstname" placeholder="first name" />
      <input ref={inputLname} name="lastname" placeholder="last name" />
      <input ref={inputEmail} name="email" placeholder="email" />
      <input ref={inputUsername} name="username" placeholder="username" />
      <input ref={inputPass} name="password" placeholder="password" />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
