import type { AXObjectModelDefinition } from "../../types.js";
const MenuItemCheckBoxRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "menuitemcheckbox",
      },
    },
  ],
  type: "widget",
};

export default MenuItemCheckBoxRole;
