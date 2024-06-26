import type { AXObjectModelDefinition } from "../../types.js";
const ListBoxOptionRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "option",
      },
    },
    {
      module: "HTML",
      concept: {
        name: "option",
      },
    },
  ],
  type: "widget",
};

export default ListBoxOptionRole;
