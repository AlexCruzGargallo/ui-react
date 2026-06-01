import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from ".";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "white", "gray"],
    },
  },
  args: {
    size: "medium",
    color: "primary",
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
export const Small: Story = { args: { size: "small" } };
export const Large: Story = { args: { size: "large" } };
export const Gray: Story = { args: { color: "gray" } };
export const White: Story = {
  args: { color: "white" },
  decorators: [
    (Story) => (
      <div style={{ background: "#374151", padding: "1.5rem", borderRadius: "0.5rem", display: "inline-block" }}>
        <Story />
      </div>
    ),
  ],
};
