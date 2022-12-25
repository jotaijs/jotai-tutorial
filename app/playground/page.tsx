"use client"

import './playground.css'
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { useEffect, useState } from "react";
import { code } from './code'
import { AiFillFileAdd, AiOutlineDelete, AiOutlineHome } from 'react-icons/ai'

const NewFile = () => {
  const { sandpack } = useSandpack();

  useEffect(() => {
    sandpack.updateFile('/App.tsx', code)
  }, [])

  const fileAdd = () => {
    const newName = (window.prompt('Enter the new file name:'));
    sandpack.addFile(newName ? newName : 'Untitled')
  }

  const fileDelete = () => {
    const filepath = sandpack.activeFile
    console.log(filepath)
    sandpack.deleteFile(filepath)
  }

  return (
    <>
      <a href='/'>
        <button className='btn'>
          <AiOutlineHome className='icon' />
        </button>
      </a>
      <button onClick={fileAdd} className='btn'>
        <AiFillFileAdd className='icon' />
      </button>
      <button onClick={fileDelete} className='btn'>
        <AiOutlineDelete className='icon' />
      </button>
    </>
  )
}

function page() {
  const [file, setFile] = useState({})
  return (
    <div>
      <SandpackProvider
        files={{}}
        template="react-ts"
        customSetup={{
          dependencies: {
            jotai: "^1.12.0",
          },
        }}
      >
        <div className="newfile">
          <NewFile />
        </div>
        <SandpackLayout>
          <SandpackFileExplorer
            className="test"
            autoSave="true"
          >
          </SandpackFileExplorer>
          <SandpackCodeEditor showTabs closableTabs />
          <SandpackPreview showNavigator />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}

export default page