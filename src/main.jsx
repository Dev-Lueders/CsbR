//Also need to review the whole legal ease stuff BEFORE GOING LIVE

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.jsx";
import store from "./redux/stores/Page_Store.jsx";
import "../src/components/components_styles.css";
import { BrowserRouter as Router} from "react-router-dom";

import Page_Grid from "./components/Util/Page_Grid/Page_Grid.jsx"
createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <StrictMode>
        <Router>
          <Page_Grid>
            <App />
          </Page_Grid>
        </Router>
      </StrictMode>
    </Provider>
  </>
);
