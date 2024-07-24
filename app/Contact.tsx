import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

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
