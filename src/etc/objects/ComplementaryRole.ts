import type { AXObjectModelDefinition } from "../../types.js";
const ComplementaryRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "complementary",
      },
    },
  ],
  type: "structure",
};

export default ComplementaryRole;
