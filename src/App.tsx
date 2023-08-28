import React from "react";
import "./App.css";
import  ReCAPTCHA  from "react-google-recaptcha";
import axios from 'axios';

function App() {
  const [isCaptchaSuccessful, setIsCaptchaSuccess] = React.useState(false)

  const handleReCaptchaVerify = (async (token: string) => {
    // Call Google's API to get score
    const res = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=6LeeDeAnAAAAAKyj0IxvVjAKit9IKx_N1RJ_6q8M&response=${token}`
    );
    
    // Extract result from the API response
    if (res.data.success){
      console.log('res',res)
      console.log('Valid');
    } else {
      console.log('res',res)
      console.log('Invalid');
    }
  })
  function onChange(value: any) {
    setIsCaptchaSuccess(true)
    console.log("captcha value: ", value);
    handleReCaptchaVerify(value);
    
  }

  return (
    <>
      <form method="post">
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