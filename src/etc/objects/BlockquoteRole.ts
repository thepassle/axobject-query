import type { AXObjectModelDefinition } from "../../../types.js";
const BlockquoteRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "blockquote",
      },
    },
  ],
  type: "structure",
};

export default BlockquoteRole;
