import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ supabaseAdmin, ...props }) => {
  const [session, setSession] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const activeSession = supabaseAdmin.auth.session();
    setSession(activeSession);
    setUser(activeSession?.user ?? null);

    const { data: authListener } = supabaseAdmin.auth.onAuthStateChange(
      (event, currentSession) => {
        setSession(currentSession);
        setUser(currentSession?.user ?? null);
        fetch("/api/auth", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session: currentSession }),
        }).then((res) => res.json());
      }
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        session,
        modalIsOpen,
        setIsOpen,
        user,
        signOut: () => supabaseAdmin.auth.signOut(),
      }}
      {...props}
    />
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    return { redirectTo: "" };
  }
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
