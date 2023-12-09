import type { Meta, StoryObj } from "@storybook/react";

import { CodeiumEditor } from "../components";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Editor",
  component: CodeiumEditor,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    editorProps: {
      width: "100vw",
      height: 500,
    },
  },
} satisfies Meta<typeof CodeiumEditor>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    editorProps: {
      width: "100vw",
      height: 500,
    },
  },
};

export const Secondary: Story = {
  args: {
    editorProps: {
      language: "Python",
      defaultValue: "def fib(n):",
      width: "100vw",
      height: 500,
    },
  },
};
