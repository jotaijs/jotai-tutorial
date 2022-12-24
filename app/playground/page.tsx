"use client";

import React from "react";
import './playground.css'
import { Sandpack } from "@codesandbox/sandpack-react";
import files from "./code";

function page() {
    return (
        <div className="playground">
            <Sandpack
                template="react"
                files={{
                    ...files,
                }}
                options={{
                    classes: {
                        "sp-wrapper": "custom-wrapper",
                        "sp-layout": "custom-layout",
                        "sp-tab-button": "custom-tab",
                    },
                    showTabs: true,
                    showNavigator: true,
                    showLineNumbers: true,
                    showInlineErrors: true,                                                                  
                    wrapContent: true,
                    editorWidthPercentage: 60,
                }}
                customSetup={{
                    dependencies: {
                        jotai: "^1.12.0",
                    },
                }}
            />
        </div>
    );
}

export default page;
