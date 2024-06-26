import type { AXObjectModelDefinition } from "../../../types.js";
const TextAreaRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        attributes: [
          {
            name: "aria-multiline",
            value: "true",
          },
        ],
        name: "textbox",
      },
    },
    {
      module: "HTML",
      concept: {
        name: "textarea",
      },
    },
  ],
  type: "widget",
};

export default TextAreaRole;
