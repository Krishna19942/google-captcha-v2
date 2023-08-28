import React from "react";
import "./App.css";
import  ReCAPTCHA  from "react-google-recaptcha";

function App() {
  const [isCaptchaSuccessful, setIsCaptchaSuccess] = React.useState(false)

  function onChange(value: any) {
    setIsCaptchaSuccess(true)
    console.log("captcha value: ", value);
  }

  return (
    <>
      <form>
        <input id="username" name="username" placeholder="Username" />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
        />
        <ReCAPTCHA
          sitekey="6LeeDeAnAAAAAIk95GzBZNxUqyeHC07mmym2W9cU"
          onChange={onChange}
          />
          <button disabled={!isCaptchaSuccessful}>Login</button>
      </form>
    </>
  );
}

export default App;