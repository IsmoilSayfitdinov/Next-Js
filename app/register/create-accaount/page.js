"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
function CreateAccount() {

    const [username, Setusername] = useState('')
    const [first_name, Setfirst_name] = useState('')
    const [last_name, Setlastname] = useState('')
    const [password, Setpassword] = useState('')
    const [password2, Setpassword2] = useState('')
    
    const router = useRouter()
    const fetchUpdateHandle = (e) => {
      e.preventDefault();
      fetch("http://localhost:8000/api/v1/users/update/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          username: username,
          first_name: first_name,
          last_name: last_name,
          password: password,
          confirm_password: password2

      })
    }) 
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        router.push("/login")
      }
    })
        
    }

    return (
      <div className="register">
        <h1>Accaount Yaratish</h1>
        <form onSubmit={fetchUpdateHandle}>
          <input
            type="text"
            placeholder="Foydalanuvchi nomi"
            required
            value={username}
            onChange={(e) => Setusername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Ism"
            required
            value={first_name}
            onChange={(e) => Setfirst_name(e.target.value)}
          />
          <input
            type="text"
            placeholder="Familiya"
            required
            value={last_name}
            onChange={(e) => Setlastname(e.target.value)}
          />
          <input
            type="password"
            placeholder="Parol"
            required
            value={password}
            onChange={(e) => Setpassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Qayta parol"
            required
            value={password2}
            onChange={(e) => Setpassword2(e.target.value)}
          />
          
          <button type="submit">Yaratish</button>
        </form>
      </div>
    );
  };

export default CreateAccount