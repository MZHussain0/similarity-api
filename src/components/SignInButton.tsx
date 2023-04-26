"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import Button from "./ui/Button";
import { toast } from "./ui/Toast";

type Props = {};

const SignInButton = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signInWithGoogle = async () => {
    setIsLoading(true);
    try {
      signIn("google");
    } catch (error) {
      toast({
        title: "error signing in",
        message: "type: error try again later",
        type: "error",
      });
    }
  };
  return (
    <Button onClick={signInWithGoogle} isLoading={isLoading}>
      SignIn
    </Button>
  );
};

export default SignInButton;
