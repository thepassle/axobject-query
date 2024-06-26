import type { AXObjectModelDefinition } from "../../types.js";
const AlertDialogRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "ARIA",
      concept: {
        name: "alertdialog",
      },
    },
  ],
  type: "window",
};

export default AlertDialogRole;
