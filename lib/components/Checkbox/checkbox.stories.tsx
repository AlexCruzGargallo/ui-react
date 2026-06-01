import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
    disabled: { control: "boolean" },
    defaultChecked: { control: "boolean" },
  },
  args: {
    label: "I agree to the terms and conditions",
    size: "medium",
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    error: "You must accept the terms to continue.",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    label: "Option not available",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Small size",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Large size",
  },
};
