import type { AXObjectModelDefinition } from "../../types.js";
const DisclosureTriangleRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        constraints: ["scoped to a details element"],
        name: "summary",
      },
    },
  ],
  type: "widget",
};

export default DisclosureTriangleRole;
