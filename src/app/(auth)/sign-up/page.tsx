import { getCurrent } from "@/features/auth/actions";
import { SignUpCard } from "@/features/auth/components/sign-up-card";
import { redirect } from "next/navigation";

const SignUpPage = async () => {
  const currentUser = await getCurrent();

  if (currentUser) redirect("/");

  return <SignUpCard />;
};

export default SignUpPage;
