import type { AXObjectModelDefinition } from "../../types.js";
const InputTimeRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "input",
        attributes: [
          {
            name: "type",
            value: "time",
          },
        ],
      },
    },
  ],
  type: "widget",
};

export default InputTimeRole;
