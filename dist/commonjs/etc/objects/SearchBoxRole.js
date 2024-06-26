"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SearchBoxRole = {
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
exports.default = SearchBoxRole;
