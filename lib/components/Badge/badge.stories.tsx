import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "warning", "danger"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium"],
    },
  },
  args: {
    children: "Badge",
    variant: "primary",
    size: "medium",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = { args: { variant: "primary", children: "Primary" } };
export const Secondary: Story = { args: { variant: "secondary", children: "Secondary" } };
export const Success: Story = { args: { variant: "success", children: "Success" } };
export const Warning: Story = { args: { variant: "warning", children: "Warning" } };
export const Danger: Story = { args: { variant: "danger", children: "Danger" } };
export const Small: Story = { args: { size: "small", children: "Small" } };
