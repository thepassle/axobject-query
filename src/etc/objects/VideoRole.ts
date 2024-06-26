import type { AXObjectModelDefinition } from "../../../types.js";
const VideoRole: AXObjectModelDefinition = {
  relatedConcepts: [
    {
      module: "HTML",
      concept: {
        name: "video",
      },
    },
  ],
  type: "widget",
};

export default VideoRole;
