import Image from "next/image";
import React from "react";
import { signIn } from "next-auth/react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto h-screen">
      <Image
        //   https://links.papareact.com/t4i
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        height={240}
        width={240}
        objectFit="contain"
        alt="Image"
      />
      <a
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer -mt-16 z-10"
      >
        Login with Facebook
      </a>
    </div>
  );
};

export default Login;
