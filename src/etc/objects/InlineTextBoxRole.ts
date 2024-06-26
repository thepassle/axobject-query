import type { AXObjectModelDefinition } from "../../../types.js";
const InlineTextBoxRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "input",
      },
    },
  ],
  type: "widget",
};

export default InlineTextBoxRole;
