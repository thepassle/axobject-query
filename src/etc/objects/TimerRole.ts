import type { AXObjectModelDefinition } from "../../types.js";
const TimerRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "timer",
      },
    },
  ],
  type: "structure",
};

export default TimerRole;
