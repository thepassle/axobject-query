import type { AXObjectModelDefinition } from "../../types.js";
const MeterRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "meter",
      },
    },
  ],
  type: "structure",
};

export default MeterRole;
