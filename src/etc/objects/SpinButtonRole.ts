import type { AXObjectModelDefinition } from "../../types.js";
const SpinButtonRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "spinbutton",
      },
    },
    {
      module: "HTML",
      concept: {
        name: "input",
        attributes: [
          {
            name: "type",
            value: "number",
          },
        ],
      },
    },
  ],
  type: "widget",
};

export default SpinButtonRole;
