import { LoginHeader, LoginWrapper } from "./styles";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

const Login = () => {
  return (
    <>
      <LoginWrapper>
        <LoginHeader>But First, Sign in !</LoginHeader>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            if (typeof credentialResponse.credential === "string") {
              const decoded = jwt_decode(credentialResponse?.credential);
              sessionStorage.setItem("userInfo", JSON.stringify(decoded));
              alert("Login successful");
            }
          }}
          onError={() => {
            alert("Login Failed");
          }}
        />
      </LoginWrapper>
    </>
  );
};

export default Login;
