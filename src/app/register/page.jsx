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
import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {
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

    const { error } = await authClient.signUp.email({
      email: user.email,
      password: user.password,
      name: user.name,
      image: user.image,
    });

    if (error) {
      toast.error(error.message || "Registration Failed!", {
        position: "top-right",
        autoClose: 5000,
        theme: "light",
        transition: Bounce,
      });
    } else {
      toast.success("Registration successful!");
      router.push("/login");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-md sm:max-w-lg p-6 sm:p-8 border flex flex-col gap-6">
        <Form onSubmit={onSubmit} className="flex flex-col gap-4 w-full">
          <TextField isRequired>
            <Label>Name</Label>
            <Input name="name" placeholder="Enter your Name" />
            <FieldError />
          </TextField>

          <TextField isRequired>
            <Label>Email</Label>
            <Input name="email" placeholder="john@example.com" />
            <FieldError />
          </TextField>

          <TextField isRequired>
            <Label>Photo Url</Label>
            <Input name="image" placeholder="Enter your Photo Url" />
            <FieldError />
          </TextField>

          <TextField isRequired minLength={8}>
            <Label>Password</Label>
            <Input name="password" placeholder="Enter your password" />
            <Description>
              Must be at least 8 characters with 1 uppercase and 1 number
            </Description>
            <FieldError />
          </TextField>

          <div className="flex flex-col sm:flex-row gap-2">
            <Button type="submit" className="w-full sm:w-auto">
              <Check />
              Submit
            </Button>

            <Button type="reset" variant="secondary" className="w-full sm:w-auto">
              Reset
            </Button>
          </div>
        </Form>

        <div className="flex items-center gap-3">
          <Separator />
          <div className="whitespace-nowrap text-sm text-gray-500">
            Or
          </div>
          <Separator />
        </div>

        <Button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center gap-2 text-teal-600"
          variant="outline"
        >
          <FcGoogle />
          Login with Google
        </Button>
      </Card>
    </div>
  );
};

export default RegisterPage;