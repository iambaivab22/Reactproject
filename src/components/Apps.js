import { makeStyles } from "@material-ui/core";
import Homec from "../pages/Homec";
import { BrowserRouter, Route } from "react-router-dom";
import Coinpagec from "../pages/Coinpagec";
import Headerc from "./Headerc";
import "../App.css";
const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Headerc />
        <Route path="/" component={Homec} exact />
        <Route path="/coins/:id" component={Coinpagec} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
