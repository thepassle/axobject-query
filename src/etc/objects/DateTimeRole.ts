import type { AXObjectModelDefinition } from "../../types.js";
const DateTimeRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "input",
        attributes: [
          {
            name: "type",
            value: "datetime",
          },
        ],
      },
    },
  ],
  type: "widget",
};

export default DateTimeRole;
