const Login = () => {
 

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
          
          <button type="submit">Ro'yxatdan o'tish</button>
        </form>
      </div>
    );
  };
  
  export default Login;
  