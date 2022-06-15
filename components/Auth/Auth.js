import { useState } from "react";
import { supabaseAuth } from "../../utils/supabaseClient";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    console.log("email", email);

    if (!email) return;

    setLoading(true);
    const { user, session, error } = await supabaseAuth.auth.signIn({ email });
    console.log("user", user);
    console.log("session", session);
    if (error) {
      console.log({ error });
    } else {
      setSubmitted(true);
    }
  };
  if (submitted) {
    return (
      <div>
        <h1>Please check email</h1>
      </div>
    );
  }

  return (
    <>
      <div>
        <input
          className="inputField"
          type="email"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <button onClick={() => signIn()}>
          <span>{loading ? "Loading" : "Send magic link"}</span>
        </button>
      </div>
    </>
  );
}
