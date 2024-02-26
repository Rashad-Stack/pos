import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LOGIN } from "@/graphql/mutation";
import { SESSION } from "@/graphql/query";
import { useMutation } from "@apollo/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function LoginPage() {
  const [login, { loading }] = useMutation(LOGIN);
  const navigate = useNavigate();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "admin@techvill.net",
      password: "123456",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    toast.promise(
      login({
        variables: { loginInput: values },
        refetchQueries: [{ query: SESSION }],
        onCompleted: () => navigate("/"),
      }),
      {
        loading: "Loading...",
        success: ({ data }) => data.login.message,
        error: (error) => error?.message,
      },
    );
  }

  return (
    <main>
      <section className="grid min-h-screen place-items-center">
        <div className="m-auto mx-auto w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
          <div className="mx-auto flex justify-center">
            <img
              className="h-7 w-auto sm:h-8"
              src="https://merakiui.com/images/logo.svg"
            />
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={loading}>
                Submit
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </main>
  );
}
