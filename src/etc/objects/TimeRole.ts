import type { AXObjectModelDefinition } from "../../types.js";
const TimeRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "time",
      },
    },
  ],
  type: "structure",
};

export default TimeRole;
