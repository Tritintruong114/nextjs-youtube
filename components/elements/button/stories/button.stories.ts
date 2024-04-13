import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../src";

const meta: Meta<typeof Button> = {
  title: "Design System/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    size: "small",
    children: "Secondary",
    variant: "secondary",
  },
};
