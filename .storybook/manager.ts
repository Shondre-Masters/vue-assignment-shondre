import { create } from "@storybook/theming/create";
import { addons } from "@storybook/manager-api";

addons.setConfig({
  theme: create({
    base: "light",
    brandTitle: "Affluent UI Kit",
    brandUrl: "#",
  }),
});
