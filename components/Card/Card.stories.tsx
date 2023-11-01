import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { Card } from "./Card";
import { View } from "react-native";

const MyButtonMeta: ComponentMeta<typeof Card> = {
  title: "Card",
  component: Card,
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

type CardStory = ComponentStory<typeof Card>;

export const Basic: CardStory = (args) => <Card {...args} />;
