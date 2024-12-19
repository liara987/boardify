import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const SignUpCard = () => {
  return (
    <Card className="w-full h-full md:w-[487px] border-none shadow-none">
      <CardHeader className="flex items-center justify-center text-center p-7">
        <CardTitle className="text-2xl">Sign Up</CardTitle>
        <CardDescription>
          By signing up, you agree to our{" "}
          <Link href="/privacy">
            {" "}
            <span className="text-blue-700">Privacy Policy</span>
          </Link>{" "}
          and{" "}
          <Link href="/terms">
            {" "}
            <span className="text-blue-700">Terms</span>
          </Link>
        </CardDescription>
      </CardHeader>
      <div className="px-7">
        <DottedSeparator />
      </div>
      <CardContent className="p-7">
        <form className="space-y-4">
          <Input
            required
            type="text"
            value={""}
            onChange={() => {}}
            placeholder="Enter name here"
            disabled={false}
          />
          <Input
            required
            type="email"
            value={""}
            onChange={() => {}}
            placeholder="Enter email address here"
            disabled={false}
          />
          <Input
            required
            type="password"
            value={""}
            onChange={() => {}}
            placeholder="Enter password here"
            disabled={false}
            min={8}
            max={256}
          />
          <Button disabled={false} size={"lg"} className="w-full">
            Login
          </Button>
          <div className="px-7">
            <DottedSeparator />
          </div>
          <CardContent className="p-7 flex flex-col gap-y-4">
            <Button
              variant={"secondary"}
              disabled={false}
              size={"lg"}
              className="w-full"
            >
              <FcGoogle className="mr-2 size-5" />
              Login with Google
            </Button>
            <Button
              variant={"secondary"}
              disabled={false}
              size={"lg"}
              className="w-full"
            >
              <FaGithub className="mr-2 size-5" />
              Login with Github
            </Button>
          </CardContent>
        </form>
      </CardContent>
    </Card>
  );
};