import type { AXObjectModelDefinition } from "../../../types.js";
const SearchBoxRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "searchbox",
      },
    },
    {
      module: "HTML",
      concept: {
        name: "input",
        attributes: [
          {
            name: "type",
            value: "search",
          },
        ],
      },
    },
  ],
  type: "widget",
};

export default SearchBoxRole;
