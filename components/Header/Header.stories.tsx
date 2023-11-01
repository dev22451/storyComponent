import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Header } from "./Header";
import { View } from "react-native";

const MyButtonMeta: ComponentMeta<typeof Header> = {
  title: "Header",
  component: Header,
  args: {
    title: "Header Text",
  },
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
};

export default MyButtonMeta;

type HeaderStory = ComponentStory<typeof Header>;

export const Basic: HeaderStory = (args) => <Header {...args} />;
