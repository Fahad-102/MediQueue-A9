"use client";

import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { authClient } from "../../lib/auth-client";
import { Bounce, toast } from "react-toastify";
import { RiResetLeftFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    if (error) {
      toast.error(error.message || "Login Failed!", {
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.success("Login successful!");
      router.push("/");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md sm:max-w-lg p-6 sm:p-8 border flex flex-col gap-6">
        <Form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">

          <TextField isRequired>
            <Label>Email</Label>
            <Input name="email" placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField isRequired>
            <Label>Password</Label>
            <Input name="password" type="password" placeholder="Password" />
            <FieldError />
          </TextField>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button className="w-full bg-teal-600 text-white" type="submit">
              <Check />
              Login
            </Button>

            <Button className="w-full" type="reset" variant="secondary">
              <RiResetLeftFill />
              Reset
            </Button>
          </div>
        </Form>

        <div className="flex items-center gap-3">
          <Separator />
          <div className="text-sm text-gray-500">Or</div>
          <Separator />
        </div>

        <Button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 text-teal-600"
          variant="outline"
        >
          <FcGoogle />
          Google Sign In
        </Button>
      </Card>
    </div>
  );
};

export default LoginPage;