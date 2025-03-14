import type { Meta, StoryObj } from "@storybook/react";
import * as React from "react";

import { Button } from "./button";
import { ThemeProvider } from "./theme";
import { toast, Toaster } from "./toast";

const meta: Meta<typeof Toaster> = {
  title: "UI/Toast",
  component: Toaster,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Default: Story = {
  render: () => (
    <div>
      <Toaster />
      <div className="flex flex-col gap-2">
        <Button onClick={() => toast("Default toast")}>Show Toast</Button>
        <Button onClick={() => toast.success("Success toast")}>
          Show Success Toast
        </Button>
        <Button onClick={() => toast.error("Error toast")}>
          Show Error Toast
        </Button>
        <Button onClick={() => toast.info("Info toast")}>
          Show Info Toast
        </Button>
        <Button onClick={() => toast.warning("Warning toast")}>
          Show Warning Toast
        </Button>
      </div>
    </div>
  ),
};
