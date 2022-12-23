"use client";

import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import Markdown from "react-markdown";
import { markdown } from "./markdown";
import files from "./code";
import setupStyles from "./styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { coldarkCold } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";

function page() {
  return (
    <div className="lesson-cont">
      <div className="mark-cont">
        <Markdown
          className="line-break"
          components={{
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  style={coldarkCold}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        >
          {markdown}
        </Markdown>
        <Link className="next-link" href="#">
          Next {"->"}
        </Link>
      </div>

      <Sandpack
        template="react"
        files={{
          ...files,
          ...setupStyles,
        }}
        options={{
          classes: {
            "sp-wrapper": "custom-wrapper",
            "sp-layout": "custom-layout",
            "sp-tab-button": "custom-tab",
          },
          showTabs: true,
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
