import type { AXObjectModelDefinition } from "../../../types.js";
const TreeItemRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "treeitem",
      },
    },
  ],
  type: "widget",
};

export default TreeItemRole;
