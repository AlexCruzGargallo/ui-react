import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  argTypes: {
    padding: {
      control: { type: "select" },
      options: ["none", "small", "medium", "large"],
    },
    shadow: { control: "boolean" },
  },
  args: {
    padding: "medium",
    shadow: true,
    children: "Card content",
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const WithContent: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: "0 0 0.5rem", fontSize: "1.1rem" }}>Title</h3>
        <p style={{ margin: 0, color: "#6b7280" }}>This is an example card with some content inside.</p>
      </div>
    ),
  },
};

export const NoShadow: Story = {
  args: {
    shadow: false,
    children: "No shadow",
  },
};

export const LargePadding: Story = {
  args: {
    padding: "large",
    children: "Large padding",
  },
};
