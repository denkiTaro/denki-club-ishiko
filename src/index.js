import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

document.cookie = 'promo_shown=1; SameSite=None; Secure';
ReactDOM.render(<App />, document.getElementById("root"));
