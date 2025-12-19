"use client";
import { Footer } from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import React, {
  ReactNode,
} from "react";

interface ClientLayoutProps {
  children: ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* Main content */}
      <main className="relative z-10">{children}</main>

      <Footer />
    </>
  );
};

export default ClientLayout;
