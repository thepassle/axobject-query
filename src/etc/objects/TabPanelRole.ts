import type { AXObjectModelDefinition } from "../../types.js";
const TabPanelRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "tabpanel",
      },
    },
  ],
  type: "structure",
};

export default TabPanelRole;
