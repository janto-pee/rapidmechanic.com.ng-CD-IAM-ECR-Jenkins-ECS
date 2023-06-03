import Layout from "../Layout/Layout";
import { useState } from "react";
import { Register, SignIn } from "../component";

export default function AuthPage() {
  const [authModal, setAuthModal] = useState(false);
  const handleAuthModal = () => {
    setAuthModal((prev) => !prev);
    console.log(authModal);
  };
  return (
    <Layout title="REGISTER OR SIGN IN">
      <div>
        {authModal == false ? (
          <Register handleAuthModal={handleAuthModal} />
        ) : (
          <SignIn handleAuthModal={handleAuthModal} />
        )}
      </div>
    </Layout>
  );
}


