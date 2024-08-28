import Link from "next/link";

import Logo from "@/components/form/logo";
import Header from "@/components/form/header";
import Input from "@/components/form/input";
import Label from "@/components/form/label";
import Button from "@/components/form/button";

export default function Login() {
  return (
    <main className="h-full flex flex-col items-center pt-12">
      <Logo />

      <form
        className="flex flex-col justify-center bg-dark-blue rounded-2xl p-7 mt-12 mobile:w-[327px] tablet:w-[400px] desktop:w-[400px]">
        
        <Header title="Login" />

        <div className="flex flex-col space-y-6 pt-8">
          <div>
            <Label htmlFor="email" />
            <Input
              type="email"
              name="email"
              placeholder="Email Address" />
          </div>

          <div>
            <Label htmlFor="password" />
            <Input
              type="password"
              name="password"
              placeholder="Password" />
          </div>
        </div>

        <Button
          type="submit"
          output="Login to your account" />

        <span className="block text-center pt-5 body-text-md">Don't have an account? 
          <Link
            className="text-red"
            href="#">
            Sign Up
          </Link>
        </span>

      </form>
    </main>
  );
}