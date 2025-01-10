import { getCurrent } from "@/features/auth/actions";
import { SignInCard } from "@/features/auth/components/sign-in-card";
import { redirect } from "next/navigation";

const SignInPage = async () => {
  const currentUser = await getCurrent();

  if (currentUser) redirect("/");
  return <SignInCard />;
};

export default SignInPage;
