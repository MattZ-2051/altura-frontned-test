import { ComponentStory, ComponentMeta } from "@storybook/react";

import Modal from "./index";

export default {
  title: "Modal",
  component: Modal,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  setIsOpen: () => undefined,
  children: (
    <>
      <h1>Modal Children</h1>
    </>
  ),
};
