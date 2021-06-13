import React, { ReactElement } from "react";
import { componentClassMaker } from "../helpers/classes";
import Aside from "./aside";
import "./layout.scss";

const cc = componentClassMaker("x-layout");

interface Props extends React.HTMLAttributes<HTMLElement> {
	children: ReactElement | Array<ReactElement>;
}

const Layout: React.FunctionComponent<Props> = (props) => {
	const { className, ...rest } = props;
	const children = props.children as Array<ReactElement>;
	const hasAside =
		"length" in children &&
		children.reduce((result, node) => result || node.type === Aside, false);
	return (
		<div className={cc({ "": true, hasAside }, { extra: className })} {...rest}>
			{props.children}
		</div>
	);
};

export default Layout;
export { Layout };
export { default as Header } from "./header";
export { default as Content } from "./content";
export { default as Aside } from "./aside";
export { default as Footer } from "./footer";
