import { useState } from "react";
import { supabaseAuth } from "../../utils/supabaseClient";
import { ToastContainer, toast } from "react-toastify";
import { regexExp } from "../../helpers/regex";
export default function Auth() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Du måste skriva i en email", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
      });
      return;
    } else if (regexExp.test(!email)) {
      toast.error("Du måste skriva i en valid Email", {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
      });
      return;
    }

    const { user, session, error } = await supabaseAuth.auth.signIn({
      email: email,
    });
    console.log("user", user);
    console.log("session", session);
    toast.success("SUCCESS", {
      position: toast.POSITION.BOTTOM_LEFT,
      autoClose: 3000,
    });

    if (error) {
      toast.error(error, {
        position: toast.POSITION.BOTTOM_LEFT,
        autoClose: 3000,
      });
      return;
    }
    // if (regex.test(email) && password.length > 5) {
    //   try {
    //     const user = await supabaseAuth.auth.login(email, password);
    //     console.log(user);
    //     toast.success("Du är nu inloggad", {
    //       position: toast.POSITION.BOTTOM_LEFT,
    //       autoClose: 3000,
    //     });
    //   } catch (err) {
    //     console.log(err.error);
    //     toast.error(`Något gick fel, ${err}`, {
    //       position: toast.POSITION.BOTTOM_LEFT,
    //     });
    //   }
    // }
  };
  //   const signIn = async () => {
  //     if (!email) {
  //       toast.error("Du måste skriva i en email", {
  //         position: toast.POSITION.BOTTOM_LEFT,
  //         autoClose: 3000,
  //       });
  //       return;
  //     }

  //     const { user, session, error } = await supabaseAuth.auth.signIn({
  //       email: email,
  //     });
  //     toast.success("SUCCESS", {
  //       position: toast.POSITION.BOTTOM_LEFT,
  //       autoClose: 3000,
  //     });

  //     if (error) {
  //       toast.error(error, {
  //         position: toast.POSITION.BOTTOM_LEFT,
  //         autoClose: 3000,
  //       });
  //       console.log({ error });
  //       return;
  //     }
  //   };

  return (
    <>
      <div className="logIn">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
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
      </div>
      <ToastContainer />
    </>
  );
}
