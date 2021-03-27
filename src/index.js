import React from "react"
import ReactDOM from "react-dom"
import Main from "./components/layouts/Main"

import MultiStoreProvider from "./stores"

import './plugins/msw';
import './plugins/i18n';


// APPLICATION
const rootElement = document.getElementById("root")
ReactDOM.render(
	<MultiStoreProvider>
		<Main />
	</MultiStoreProvider>,
	rootElement
)
