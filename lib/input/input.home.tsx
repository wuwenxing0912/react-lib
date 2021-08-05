import React, { Fragment, useState } from "react";
import Input from "./input";
import Icon from "../icon/icon";
import createHighlightCode from "../helpers/code-highlight";

const defaultInput = `<Input placeholder="placeholder"></Input>`;
const disabledInput = `<Input disabled={true} placeholder="disabled"></Input>`;
const fixInput = `<Input prefix="username" placeholder="username"></Input>
<Input suffix="password" placeholder="password"></Input>`;
const errorInput = `<Input error={true} placeholder="error"></Input>`;
const addOnInput = `<Input addOnBefore="Before" addOnAfter="After" placeholder="placeholder"></Input>
<Input addOnBefore="Before" placeholder="placeholder"></Input>
<Input addOnAfter="After" placeholder="placeholder"></Input>`;

const inputHome: React.FunctionComponent = () => {
	return (
		<Fragment>
			{createSection("组件和代码示例", defaultInput, "输入框的基本用法", {
				placeholder: "placeholder",
			})}
			{createSection("", disabledInput, "输入框禁用状态", {
				placeholder: "disabled",
				disabled: true,
			})}
			{createSectionOfInputFix("", fixInput, "带有前/后缀图标的输入框", {
				prefix: "username",
				username: "username",
				suffix: "password",
				password: "password",
			})}
			{createSection("", errorInput, "输入框错误状态", {
				placeholder: "error",
				error: true,
			})}
			{createSectionOfInputAddOn("", addOnInput, "输入框前/后缀标签", {
				placeholder: "placeholder",
				addOnBefore: "Before",
				addOnAfter: "After",
			})}
			<section>
				<h1>API</h1>
				<table className="api-table" cellSpacing="0" cellPadding="0">
					<thead>
						<tr>
							<th className="api-table-head">API</th>
							<th className="api-table-head">说明</th>
							<th className="api-table-head">类型</th>
							<th className="api-table-head">是否可选</th>
							<th className="api-table-head">默认值</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td className="api-button-type">id</td>
							<td className="api-type-description">输入框的id</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-classname">placeholder</td>
							<td className="api-classname-description">输入框的placeholder</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-classname">className</td>
							<td className="api-classname-description">自定义类名</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">style</td>
							<td className="api-style-description">自定义样式</td>
							<td className="api-type">React.CSSProperties</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">value</td>
							<td className="api-style-description">输入框的value</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">disabled</td>
							<td className="api-style-description">输入框禁用状态</td>
							<td className="api-type">boolean</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">false</td>
						</tr>
						<tr>
							<td className="api-style">prefix</td>
							<td className="api-style-description">输入框前缀图标</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">suffix</td>
							<td className="api-style-description">输入框后缀图标</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">error</td>
							<td className="api-style-description">输入框后缀错误状态</td>
							<td className="api-type">boolean</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">false</td>
						</tr>
						<tr>
							<td className="api-style">addOnBefore</td>
							<td className="api-style-description">输入框前缀标签</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
						<tr>
							<td className="api-style">addOnAfter</td>
							<td className="api-style-description">输入框后缀标签</td>
							<td className="api-type">string</td>
							<td className="api-nesscery">是</td>
							<td className="api-default">---</td>
						</tr>
					</tbody>
				</table>
			</section>
		</Fragment>
	);
};

const createSection = (
	h1?: string,
	code?: string,
	description?: string,
	options?: { [k: string]: any }
) => {
	const [visible, setVisble] = useState(false);
	const [showCode, setshowCode] = useState(false);
	return (
		<section>
			{h1 ? <h1>{h1}</h1> : ""}
			<div className="example-container">
				<Input {...options}></Input>
			</div>
			<div className="description">
				<span className="text">{description}</span>
				<span
					className="code-icon"
					style={{ display: "inline-flex", cursor: "pointer" }}
					onClick={() => {
						setVisble(!visible);
					}}
					onMouseEnter={() => {
						setshowCode(!showCode);
					}}
					onMouseLeave={() => {
						setshowCode(!showCode);
					}}
				>
					<Icon name="code" style={{ height: 19 }}></Icon>
				</span>
				<span
					className="pop-content"
					style={{ display: showCode ? "inline-block" : "none" }}
				>
					{visible ? "收起代码" : "显示代码"}
				</span>
			</div>
			<div
				className="code-area"
				style={{ display: visible ? "block" : "none" }}
			>
				{createHighlightCode(code as string)}
			</div>
		</section>
	);
};

const createSectionOfInputAddOn = (
	h1?: string,
	code?: string,
	description?: string,
	options?: { [k: string]: any }
) => {
	const [visible, setVisble] = useState(false);
	const [showCode, setshowCode] = useState(false);
	const { addOnBefore, addOnAfter, ...rest } = options!;
	return (
		<section>
			{h1 ? <h1>{h1}</h1> : ""}
			<div className="example-container-fix">
				<Input
					addOnBefore={addOnBefore}
					addOnAfter={addOnAfter}
					{...rest}
				></Input>
				<div style={{ marginBottom: "32px" }}></div>
				<Input addOnAfter={addOnAfter} {...rest}></Input>
				<div style={{ marginBottom: "32px" }}></div>
				<Input addOnBefore={addOnBefore} {...rest}></Input>
			</div>
			<div className="description">
				<span className="text">{description}</span>
				<span
					className="code-icon"
					style={{ display: "inline-flex", cursor: "pointer" }}
					onClick={() => {
						setVisble(!visible);
					}}
					onMouseEnter={() => {
						setshowCode(!showCode);
					}}
					onMouseLeave={() => {
						setshowCode(!showCode);
					}}
				>
					<Icon name="code" style={{ height: 19 }}></Icon>
				</span>
				<span
					className="pop-content"
					style={{ display: showCode ? "inline-block" : "none" }}
				>
					{visible ? "收起代码" : "显示代码"}
				</span>
			</div>
			<div
				className="code-area"
				style={{ display: visible ? "block" : "none" }}
			>
				{createHighlightCode(code as string)}
			</div>
		</section>
	);
};

const createSectionOfInputFix = (
	h1?: string,
	code?: string,
	description?: string,
	options?: { [k: string]: any }
) => {
	const [visible, setVisble] = useState(false);
	const [showCode, setshowCode] = useState(false);
	const { prefix, username, suffix, password, ...rest } = options!;
	return (
		<section>
			{h1 ? <h1>{h1}</h1> : ""}
			<div className="example-container-fix">
				<Input prefix={prefix} placeholder={username} {...rest}></Input>
				<div style={{ marginBottom: "32px" }}></div>
				<Input suffix={suffix} placeholder={password} {...rest}></Input>
			</div>
			<div className="description">
				<span className="text">{description}</span>
				<span
					className="code-icon"
					style={{ display: "inline-flex", cursor: "pointer" }}
					onClick={() => {
						setVisble(!visible);
					}}
					onMouseEnter={() => {
						setshowCode(!showCode);
					}}
					onMouseLeave={() => {
						setshowCode(!showCode);
					}}
				>
					<Icon name="code" style={{ height: 19 }}></Icon>
				</span>
				<span
					className="pop-content"
					style={{ display: showCode ? "inline-block" : "none" }}
				>
					{visible ? "收起代码" : "显示代码"}
				</span>
			</div>
			<div
				className="code-area"
				style={{ display: visible ? "block" : "none" }}
			>
				{createHighlightCode(code as string)}
			</div>
		</section>
	);
};

export default inputHome;
