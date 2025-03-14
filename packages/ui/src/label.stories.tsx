import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Input } from "./input";
import { Label } from "./label";

const meta: Meta<typeof Label> = {
  title: "UI/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Basic: Story = {
  args: {
    children: "Label Text",
    htmlFor: "example",
  },
};

export const Required: Story = {
  args: {
    children: (
      <>
        Label Text <span className="text-red-500">*</span>
      </>
    ),
    htmlFor: "required-example",
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="disabled-input" className="text-muted-foreground">
        Disabled Input
      </Label>
      <Input
        type="text"
        id="disabled-input"
        disabled
        placeholder="You cannot type here"
      />
    </div>
  ),
};
