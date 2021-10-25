import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

import withLoading from "./components/withLoading/withLoading";
import Product from "./page/product/product";
import productReducer from "./redux/reducers/product/productreducer";
import ErrorBoundary from "./components/errorBoundry/ErrorBoundry";

function App() {
  const dispatch = useDispatch();
  const productReducer = useSelector((state) => state.productReducer);
  useEffect(() => {
    console.log(productReducer);
  });
  const handleAdd = () => {
    dispatch({ type: "HI" });
  };
  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Editsdfvdsg <code></code> and save to reload.
          </p>
          <button onClick={handleAdd}>add</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Product
            loading={productReducer.loading}
            data={productReducer.product}
          />
        </header>
      </div>
    </ErrorBoundary>
  );
}
const mapStateToProps = (state) => ({
  product: state.productReducer,
});

export default connect(mapStateToProps)(App);
