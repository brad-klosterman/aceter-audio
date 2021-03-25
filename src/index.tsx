import "@styles/styles.less";
import "@styles/styles.scss";

import Main from "@src/components/main/Main";
import Amplify from "aws-amplify";
import React from "react";
import ReactDom from "react-dom";

import config from "./aws-exports";

Amplify.configure(config);

ReactDom.render(<Main />, document.getElementById("root"));
