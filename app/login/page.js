"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();


  const LoginHandle = (e) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/v1/users/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userinput:email,
        password:password,
      }),
    }).then((res) => res.json())
    .then((data) => {
      if (data.success) {
        localStorage.setItem('token', data.access_token);
        router.push('/');
      }
    })
  }


    return (
      <div className="register">
        <h1>Login Qilish</h1>
        <form onSubmit={LoginHandle}>
          <input
            type="text"
            placeholder="Foydalanuvchi email yoki username"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Parol"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          
          <button type="submit">Login Qilish</button>
        </form>
      </div>
    );
  };
  
  export default Login;
  