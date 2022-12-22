"use client"

import Image from 'next/image'
import jotia_mascot from '../public/jotai-mascot.png'
import Markdown from 'react-markdown'
import { example } from './example'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

export default function Home() {
  return (
    <div className='home-cont'>

      <div className='home-img'>
        <Image
          src={jotia_mascot}
          alt='bhoot'
          width={80}
          height={70}
        />

        <div className='home-btn'>
          <button className='btn-1'>Quick start</button>
          <button className='btn-2'>Tutorial</button>
        </div>
      </div>

      <div className='example'>
        <Markdown
          children={example}
          components={{
            code({ node, inline, className, children, ...props }) {
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
    </div>
  )
}
