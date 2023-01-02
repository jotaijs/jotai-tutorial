"use client"

import React from 'react'
import './examples.css'
import { BsSun, BsFillMoonStarsFill } from "react-icons/bs"

import { themeAtom } from "../quick-start/Header";
import { useAtom } from 'jotai'

function Page() {
	const [theme, setTheme] = useAtom(themeAtom);
	const handleClick = () => {
		setTheme();
	}

	return (
		<div className={`examples ${theme}`}>
			<div className="example-mid">
				<a href='/quick-start/intro'>
					<button className={`example-btn ${theme}-ex-btn`}>
						Quick Start
					</button>
				</a>
				<a href='/playground'>
					<button className={`example-btn ${theme}-ex-btn`}>
						Playground
					</button>
				</a>
			</div>

			{theme === 'light' ? <BsFillMoonStarsFill className="ex-switcher" onClick={handleClick} /> : <BsSun className="ex-switcher" onClick={handleClick} />}
			<h1 className="cont-head">Examples</h1>
			<div className="exp-cont">
				<ul>
					<li>
						<a href="/examples/todolist" className={`li-head ${theme}-head`}>Todos example</a>
						<p className={`li-des ${theme}-des`}>Record your todo list by typing them into this app, check them off if you have completed the task, and switch between Completed and Incompleted to see the status of your task.</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Page