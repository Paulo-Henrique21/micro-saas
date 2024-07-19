"use client";

import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { toast } from "@/components/ui/use-toast";

export function AuthForm() {
  const form = useForm();

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      console.log(data);

      await signIn("nodemailer", { email: data.email, redirect: false });
      toast({
        title: "Magic Link Sent",
        description: "Check your email for the magic link to login",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
      });
    }
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="mx-auto w-96">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Authentication</CardTitle>
          <CardDescription>
            Enter your email to receive a magic link
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="m@example.com"
                required
                type="email"
                {...form.register("email")}
              />
            </div>
            <Button
              className="w-full"
              type="submit"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? "Sending..." : "Send Magic Link"}
            </Button>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
