"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SliderRole = {
    relatedConcepts: [
        {
            module: "ARIA",
            concept: {
                name: "slider",
            },
        },
        {
            module: "HTML",
            concept: {
                name: "input",
                attributes: [
                    {
                        name: "type",
                        value: "range",
                    },
                ],
            },
        },
    ],
    type: "widget",
};
exports.default = SliderRole;
