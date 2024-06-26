import type { AXObjectModelDefinition } from "../../../types.js";
const TableRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "table",
      },
    },
    {
      module: "HTML",
      concept: {
        name: "table",
      },
    },
  ],
  type: "structure",
};

export default TableRole;
