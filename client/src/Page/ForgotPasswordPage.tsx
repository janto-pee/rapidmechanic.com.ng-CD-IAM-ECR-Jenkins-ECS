import Layout from "../Layout/Layout";
// import { useState } from "react";
import { ForgotPassword } from "../component";

export default function ForgotPasswordPage() {
  // const [authModal, setAuthModal] = useState(false);
  // const handleAuthModal = () => {
  //   setAuthModal((prev) => !prev);
  // };
  return (
    <Layout title="FORGOT PASSWORD">
      <ForgotPassword />
    </Layout>
  );
}
