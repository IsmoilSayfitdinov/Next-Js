const Register = () => {
 

  return (
    <div className="register">
      <h1>Ro'yxatdan o'tish</h1>
      <form>
        <input
          type="text"
          placeholder="Foydalanuvchi nomi"
          required
        />
        <input
          type="password"
          placeholder="Parol"
          required
        />
        <input
          type="email"
          placeholder="Email"
          required
        />
        <input
          type="text"
          placeholder="Telefon raqami"
          required
        />
        <button type="submit">Ro'yxatdan o'tish</button>
      </form>
    </div>
  );
};

export default Register;
