"use client";

import React from "react";
import { Sandpack } from "@codesandbox/sandpack-react";
import Markdown from "react-markdown";
import { markdown } from "./markdown";
import files from "./code";
import setupStyles from "./styles";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "../../vscDarkPlus";
import Link from "next/link";

import { themeAtom } from "../Header";
import { useAtom } from 'jotai';


function Page() {
  const [theme] = useAtom(themeAtom)
  return (
    <div className={`${theme} lesson-cont`}>
      <div className="mark-cont">
        <Markdown
          className={`line-break line-break-${theme}`}
          components={{
            code({ node, inline, className, children, ...props }: any) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  language={match[1]}
                  style={vscDarkPlus}
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
        <Link className={`next-link next-link-${theme}`} href="/quick-start/theme-setting">
          Next {"->"}
        </Link>
      </div>

      <Sandpack
        theme={theme}
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

export default Page;
