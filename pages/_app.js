import "../styles/globals.css";
import Layout from "../components/layout";
import { AuthProvider } from "../components/Auth/Auth";
import { supabase } from "../utils/supabaseClient";
export default function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider supabaseAdmin={supabase}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
