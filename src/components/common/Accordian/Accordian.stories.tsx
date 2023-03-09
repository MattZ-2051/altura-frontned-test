import { ComponentStory, ComponentMeta } from "@storybook/react";

import Accordian from "./index";

export default {
  title: "Accordian",
  component: Accordian,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Accordian>;

const Template: ComponentStory<typeof Accordian> = (args) => (
  <Accordian {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  data: [
    {
      title: "Description",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      title: "Attributes",
      body: [
        {
          trait_type: "face",
          value: "holographic beard",
        },
        {
          trait_type: "face",
          value: "holographic beard",
        },
        {
          trait_type: "face",
          value: "holographic beard",
        },
        {
          trait_type: "face",
          value: "holographic beard",
        },
      ],
    },
  ],
};
