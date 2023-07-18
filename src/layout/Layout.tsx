import React from "react";
import Navbar from "../component/navbar";
import { Provider } from "react-redux";
import store from "../redux/store";
const Layout = ({ children }: any) => {
  return (
    <>
      <Provider store={store}>
        <Navbar />

        {children}
      </Provider>
    </>
  );
};

export default Layout;
