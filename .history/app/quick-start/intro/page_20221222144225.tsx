import React from 'react'
import { Sandpack } from "@codesandbox/sandpack-react";
import Markdown from 'react-markdown';
import { markdown } from './MD/intro.js'
import './App.css'
import files from "./Persist.js";
import setupStyles from "./styles.js";
import Header from "./Header.js";

function page() {
  return (
    <div>page</div>
  )
}

export default page