"use client"

import "../../playground/playground.css"
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackFileExplorer,
  useSandpack,
} from "@codesandbox/sandpack-react";
import { useEffect, useState } from "react";
import { code } from "./code";
import { AiFillFileAdd, AiOutlineDelete, AiOutlineHome } from "react-icons/ai"
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs"

import { themeAtom } from "../../quick-start/Header";
import { useAtom } from "jotai";

const NewFile = () => {
  const [theme, setTheme] = useAtom(themeAtom);
  const { sandpack } = useSandpack();
  const handleClick = () => {
    setTheme();
  }

  function updatedFiles() {
    useEffect(() => {
      sandpack.updateFile('/App.tsx', code);
    }, [])
  }

  updatedFiles();

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
      <div className="left-playg">
        <a href='/'>
          <button className={`left-${theme}-btn btn`}>
            <AiOutlineHome className='icon' />
          </button>
        </a>
        <button onClick={fileAdd} className={`left-${theme}-btn btn`}>
          <AiFillFileAdd className='icon' />
        </button>
        <button onClick={fileDelete} className={`left-${theme}-btn btn`}>
          <AiOutlineDelete className='icon' />
        </button>
      </div>

      <div className="playground-mid">
        <a href='/quick-start/intro'>
          <button className={`playground-btn ${theme}-mid-btn`}>
            Quick Start
          </button>
        </a>
        <a href='/playground'>
          <button className={`playground-btn ${theme}-mid-btn`}>
            Playground
          </button>
        </a>
      </div>

      <div className="playground-toogle">
        {theme === 'light' ? <BsFillMoonStarsFill className="theme-switcher" onClick={handleClick} /> : <BsSun className="theme-switcher" onClick={handleClick} />}
      </div>
    </>
  )
}

function Page() {
  const [theme] = useAtom(themeAtom)
  const [file, setFile] = useState({})
  return (
    <div>
      <SandpackProvider
        theme={theme==='light'? 'light': 'dark'}
        files={{ }}
        template="react-ts"
        customSetup={{
          dependencies: {
            "jotai": "^1.9.2",
            "antd": "^4.16.2",
            "@react-spring/web": "9.2.3",
          },
        }}
      >
        <div className={`newFile-${theme}`}>
          <NewFile />
        </div>
        <SandpackLayout>
          <SandpackFileExplorer
            className="test"
            autoSave="true"
          >
          </SandpackFileExplorer>
          <SandpackCodeEditor showTabs closableTabs showLineNumbers />
          <SandpackPreview showNavigator />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  )
}

export default Page