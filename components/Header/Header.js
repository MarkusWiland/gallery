import React, { useState } from "react";
import { supabase } from "../../utils/supabaseClient";

export default function Header({ user }) {
  function openModal() {
    setIsOpen(true);
  }

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    }
  };
  return (
    <div className="absolut">
      {!user ? (
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="inputField"
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <input
             className="inputField"
             type="password"
             placeholder="password"
             onChange={(e) => setPassword(e.target.value)}
           /> */}
          </div>
          <div>
            <button>
              <span>Logga in</span>
            </button>
          </div>
        </form>
      ) : (
        <>
          <button className="button" onClick={openModal}>
            Lägg till bilder
          </button>
          <button
            className="button block"
            onClick={() => supabase.auth.signOut()}
          >
            Logga ut
          </button>
        </>
      )}
    </div>
  );
}
