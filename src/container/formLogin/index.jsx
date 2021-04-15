import React, { useRef } from "react";
import "./style.css";
import InputCpn from "../../components/input/index";
import ButtonCpn from "../../components/button/index";

// function FormLogin(props) {
//   return (
//     <div className="Container">
//       <Input type="email" placeholder="Email hoặc số điện thoại" />
//       <Input type="password" placeholder="Mật khẩu" />
//       <Button title="Đăng nhập" color="#1877f2" width={92} />
//       <p>Quên mật khẩu?</p>
//       <hr />
//       <Button title="Tạo tài khoản mới" color="#42b72a" width={50} />
//     </div>
//   );
// }

//
const FormLogin = (props) => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleOnChangeEmail = (e) => {
    emailRef.current = e.target.value;
    console.log("email");
  };

  const handleOnChangePassword = (e) => {
    passwordRef.current = e.target.value;
    console.log("pass");
  };

  const handleLogin = () => {
    let message;
    if (!emailRef.current && !passwordRef.current) {
      message = "Vui lòng nhập Email và Password";
    } else if (!emailRef.current) {
      message = "Email không hợp lệ";
    } else if (!passwordRef.current) {
      message = "Password không hợp lệ";
    } else {
      message = "Đăng Nhập Thành Công";
    }
    alert(message);
  };

  return (
    <div className="Container">
      <InputCpn
        type="gid"
        handleOnChange={handleOnChangeEmail}
        placeholder="Email hoặc số điện thoại"
      />
      <InputCpn
        type="password"
        handleOnChange={handleOnChangePassword}
        placeholder="Mật khẩu"
      />
      <ButtonCpn
        title="Đăng nhập"
        color="#1877f2"
        width="92%"
        onClick={handleLogin}
      />
      <p>Quên mật khẩu?</p>
      <hr />
      <ButtonCpn title="Tạo tài khoản mới" color="#42b72a" width="50%" />
    </div>
  );
};
export default FormLogin;
