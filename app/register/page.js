"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Register = () => {
  const [phone, setPhone] = useState("");
  const [trueVerify, setTrueVerify] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");

  const router = useRouter();
  
  


  const FetchHandlesRegister = (e) => {
    e.preventDefault();
      fetch("http://localhost:8000/api/v1/users/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email_phone_number: phone,
        }),
      }) 
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.access_token){
          localStorage.setItem("token", data.access_token);
          setTrueVerify(true);
        } else {
          setTrueVerify(false);
        }
        
      });
   
  }

  const FetchHandlesVerifyCode = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/api/v1/users/verify/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify({
        code: verifyCode
      }),
    }) .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        router.push("/register/create-accaount");
      }
    });
  }

  return (
    <div className="register">
      {trueVerify ? (
        <>
           <h1>Kodni Tasdiqlash</h1>
        <form onSubmit={FetchHandlesVerifyCode}>
            <input
            type="text"
            placeholder="Verify Code"
            value={verifyCode}
            onChange={(e) => setVerifyCode(e.target.value)}
          />
        <button type="submit">Tasdiqlash</button>
      </form>
        </>
      ) : (
        <>
           <h1>Ro'yxatdan o'tish</h1>
        <form onSubmit={FetchHandlesRegister}>
          <input
            type="text"
            placeholder="Telefon raqami yoki email"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <button type="submit">Ro'yxatdan o'tish</button>
        </form>
        </>
      )}
    </div>
  );
};

export default Register;
