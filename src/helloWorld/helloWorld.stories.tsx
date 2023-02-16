import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import HelloWorld from "./helloWorld";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/HelloWorld",
  component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof HelloWorld> = (args) => <HelloWorld {...args} />;

export const HelloWorldStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorldStory.args = {
  label: "Hello world!",
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  label: "Click me!",
};