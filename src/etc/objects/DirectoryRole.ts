import type { AXObjectModelDefinition } from "../../types.js";
const DirectoryRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "directory",
      },
    },
    {
      module: "HTML",
      concept: {
        name: "dir",
      },
    },
  ],
  type: "structure",
};

export default DirectoryRole;
