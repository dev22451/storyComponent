import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Input } from "./inputText";
import { View } from "react-native";

const MyButtonMeta: ComponentMeta<typeof Input> = {
  title: "InputText",
  component: Input,
  args: {
    title: "Write something here!!",
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

type InputStory = ComponentStory<typeof Input>;

export const Basic: InputStory = (args) => <Input {...args} />;
