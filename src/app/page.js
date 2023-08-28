"use client";
import { Button, Container, Group, Text, Title } from "@mantine/core";
import { useState } from "react";
import { Rating } from "@mantine/core";
import { Textarea } from "@mantine/core";
import { Divider } from "@mantine/core";
import { Pagination } from "@mantine/core";

export default function FoodReviewPage() {
  const [value, setValue] = useState(0);

  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>
      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating value={value} onChange={setValue} size="lg" />
      <Textarea
        mt="xs"
        placeholder="Do you enjoy eating?"
        label="Your review"
        minRows={3}
      />
      <Button mt="xs" color="orange">
        Submit Review
      </Button>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} fractions={2} readOnly />
      </Group>
      <Text align="center" color="dimmed">
        Best pizza in this world. I give you X score.
      </Text>
      <Divider my="sm" />
      <Group position="center">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} fractions={2} readOnly />
      </Group>
      <Text align="center" color="dimmed">
        My favourite part is pepperoni
      </Text>
      <Pagination total={20} color="orange" position="center" mt="md" />
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Sirawit Kongkham 650610814
      </Text>
    </Container>
  );
}
