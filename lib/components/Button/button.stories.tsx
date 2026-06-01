import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "danger", "ghost"],
    },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    loading: { control: "boolean" },
    disabled: { control: "boolean" },
    onClick: { action: "clicked" },
  },
  args: {
    children: "Click Me",
    variant: "primary",
    size: "medium",
    loading: false,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

export const Large: Story = {
  args: {
    size: "large",
  },
};

export const Small: Story = {
  args: {
    size: "small",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Saving...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
