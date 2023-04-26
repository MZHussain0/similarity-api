"use client";
import { signOut } from "next-auth/react";
import React, { useState } from "react";
import Button from "./ui/Button";
import { toast } from "./ui/Toast";

type Props = {};

const SignOutButton = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const signUserOut = async () => {
    setIsLoading(true);
    try {
      signOut();
    } catch (error) {
      toast({
        title: "error signing out",
        message: "Pleasetry again later",
        type: "error",
      });
    }
  };
  return (
    <Button onClick={signUserOut} isLoading={isLoading}>
      SignIn
    </Button>
  );
};

export default SignOutButton;
