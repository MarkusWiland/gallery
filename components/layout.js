import React from "react";
import Header from "./Header/Header";
import { useAuth } from "../components/Auth/Auth";

export default function Layout({ children }) {
  const { user, signOut } = useAuth();
  return (
    <>
      <Header user={user} />
      <main className="layout">{children}</main>
    </>
  );
}
