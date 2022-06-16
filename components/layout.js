import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <main className="layout">{children}</main>
    </>
  );
}
