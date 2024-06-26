import type { AXObjectModelDefinition } from "../../types.js";
const MenuItemRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "menuitem",
      },
    },
    {
      module: "HTML",
      concept: {
        name: "menuitem",
      },
    },
  ],
  type: "widget",
};

export default MenuItemRole;
