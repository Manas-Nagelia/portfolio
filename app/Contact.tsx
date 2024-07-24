import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Text,
  Stack,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

function GoogleIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 262"
      style={{ width: "0.9rem", height: "0.9rem" }}
      {...props}
    >
      <path
        fill="#4285F4"
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
      />
      <path
        fill="#34A853"
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
      />
      <path
        fill="#FBBC05"
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
      />
      <path
        fill="#EB4335"
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
      />
    </svg>
  );
}

export function Contact() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <form
      id="contact"
      onSubmit={form.onSubmit(() => {
        fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.values.name,
            email: form.values.email,
            subject: form.values.subject,
            message: form.values.message,
          }),
        })
          .then((res) => {
            res.json();

            form.setValues({
              name: "",
              email: "",
              subject: "",

              message: "",
            });
            window.scrollTo(0, 0);
          })
          .then((data) => {
            notifications.show({
              title: "Email Sent!",
              message:
                "Email successfully sent! Check your email for a confirmation email. If you don't see it, check your spam. Thank you!",
            });
          });
      })}
    >
      <Stack align="center">
        <Title
          order={2}
          size="h1"
          style={{ fontFamily: "Greycliff CF, var(--mantine-font-family)" }}
          fw={900}
          ta="center"
        >
          Get in touch
        </Title>
        <Text align="center" mt="sm">
          Want to get in touch? Fill out the form below.
        </Text>

        <Group spacing="md">
          <Button
            leftIcon={<IconBrandGithub size={16} />}
            variant="default"
            component="a"
            href="https://github.com/manas-nagelia"
            target="_blank"
          >
            GitHub
          </Button>
          <Button
            leftIcon={<IconBrandLinkedin size={16} />}
            variant="default"
            component="a"
            href="https://linkedin.com/in/manas-nagelia"
            target="_blank"
          >
            LinkedIn
          </Button>
        </Group>
      </Stack>

      <div style={{ marginLeft: "5%", marginRight: "5%", marginBottom: "1%" }}>
        <SimpleGrid mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="default"
            {...form.getInputProps("name")}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="default"
            {...form.getInputProps("email")}
          />
        </SimpleGrid>

        <TextInput
          label="Subject"
          placeholder="Subject"
          mt="md"
          name="subject"
          variant="default"
          {...form.getInputProps("subject")}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="default"
          {...form.getInputProps("message")}
        />
        <Group mt="xl">
          <Button type="submit" size="md">
            Send message
          </Button>
        </Group>
      </div>
    </form>
  );
}
