import type { AXObjectModelDefinition } from "../../types.js";
const ColorWellRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "input",
        attributes: [
          {
            name: "type",
            value: "color",
          },
        ],
      },
    },
  ],
  type: "widget",
};

export default ColorWellRole;
