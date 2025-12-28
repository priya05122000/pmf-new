"use client";
import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import React, {
  ReactNode,
} from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { ToastContainer } from "react-toastify";

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
      scriptProps={{ async: true, defer: true, appendTo: "body" }}
    >

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />


      <Navbar />
      {/* Main content */}
      <main className="relative z-10">{children}</main>

      <Footer />
    </GoogleReCaptchaProvider>
  );
};

export default ClientLayout;
