import type { AXObjectModelDefinition } from "../../types.js";
const AudioRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "audio",
      },
    },
  ],
  type: "widget",
};

export default AudioRole;
