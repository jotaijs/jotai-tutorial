"use client"

import React from 'react'
import { Sandpack } from "@codesandbox/sandpack-react";
import Markdown from 'react-markdown';
import { markdown } from './markdown'
import files from './code';
import setupStyles from './styles';
import { Prism as SyntaxHighlighter} from 'react-syntax-highlighter'

function page() {
    return (
        <div className='lesson-cont'>
            <div className='mark-cont'>
                <Markdown
                    children={markdown}
                    components={{
                        code({node, inline, className, children, ...props}) {
                          const match = /language-(\w+)/.exec(className || '')
                          return !inline && match ? (
                            <SyntaxHighlighter
                              children={String(children).replace(/\n$/, '')}
                              language={match[1]}
                              PreTag="div"
                              {...props}
                            />
                          ) : (
                            <code className={className} {...props}>
                              {children}
                            </code>
                          )
                        }
                      }}
                />
            </div>

            <Sandpack
                template="react"
                files={{
                    ...files,
                    ...setupStyles
                }}

                options={{
                    classes: {
                        "sp-wrapper": "custom-wrapper",
                        "sp-layout": "custom-layout",
                        "sp-tab-button": "custom-tab",
                    },
                }}
                customSetup={{
                    dependencies: {
                        "jotai": "^1.12.0",
                    },
                }}
            />
        </div>
    )
}

export default page