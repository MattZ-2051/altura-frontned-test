import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "./index";

export default {
  title: "Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Button Label",
};

export const Link = Template.bind({});

Link.args = {
  label: "Button Link",
  to: "https://opensea.io/",
};
