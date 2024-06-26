import type { AXObjectModelDefinition } from "../../../types.js";
const AbbrRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "abbr",
      },
    },
  ],
  type: "structure",
};

export default AbbrRole;
