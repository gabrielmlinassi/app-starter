const Login = () => {
  return (
    <div>
      <h1>SIGN UP</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="username">Username</label>
          <input type="email" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <label htmlFor="password">Confirm Password</label>
          <input type="password" name="confirm_password" id="confirm_password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Login
