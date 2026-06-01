import type { Meta, StoryObj } from "@storybook/react";
import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
  },
  args: {
    placeholder: "Type here...",
    size: "medium",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const WithLabel: Story = {
  args: {
    label: "Email address",
    placeholder: "you@email.com",
    type: "email",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Password",
    type: "password",
    helperText: "Minimum 8 characters.",
  },
};

export const WithError: Story = {
  args: {
    label: "Username",
    placeholder: "username",
    error: "This field is required.",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled field",
    value: "Not editable",
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Small size",
    placeholder: "small",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large size",
    placeholder: "large",
  },
};
