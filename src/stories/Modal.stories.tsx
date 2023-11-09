import { StoryObj, Meta } from "@storybook/react";
import CustomModal from "../components/Modal";
import React from "react";

type Story = StoryObj<typeof CustomModal>;

export default {
  title: "Modal",
  component: CustomModal,
  tags: ["autodocs"],
} as Meta;

export const Modal: Story = {
  args: {
    open: true,
    onClose: () => {},
    children: <div>This is a modal!</div>,
    title: "Modal",
  },
};

export const ModalWithCloseIcon: Story = {
  args: {
    open: true,
    onClose: () => {},
    title: "Modal with close icon",
    children: <div>This is a modal2!</div>,
    showCloseIcon: true
  },
};