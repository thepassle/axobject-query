import type { AXObjectModelDefinition } from "../../../types.js";
const MenuBarRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "menubar",
      },
    },
  ],
  type: "structure",
};

export default MenuBarRole;
