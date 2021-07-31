import React, { useState } from "react";
import LoginForm from "@components/home/login-form";
import RegisterForm from "@components/home/register-form";
import Head from "next/head";

export default function HomePage() {
  const [view, setView] = useState("login");
  return (
    <>
      <Head>
        {/* <link rel="shortcut icon" href="/icon/logo.ico" /> */}
        <title>Desa Candisari</title>
      </Head>
      <div className="flex flex-col sm:flex-row">
        <div className="w-auto sm:w-8/12 p-20 min-h-screen bg-main">
          {/* logo dan kawan-kwannya */}
          <div className="flex flex-row relative">
            <img
              className="w-22 h-full"
              src="images/logo-desa.png"
              alt="logo desa penari"
            />
            <div className="ml-5 text-white">
              <p className="text-3xl font-bold mb-1">Pemerintah Desa Candisari</p>
              <p className="text-xl mb-1">Kecamatan Windusari</p>
              <p className="text-xl mb-1">Kabupaten Magelang</p>
            </div>
          </div>
          {/* kontent gambar tengah */}
          <img
            className="w-2/6 mt-20 m-auto"
            src="images/vector-login.png"
            alt="vector login"
          />
        </div>
        <div className="flex w-auto sm:w-4/12 py-20 px-10">
          <div className="self-center m-auto w-8/12">
            {
              view === "login" ?
                <LoginForm setView={setView} />
                :
                <RegisterForm setView={setView} />
            }
          </div>
        </div>
      </div>
    </>
  );
}
