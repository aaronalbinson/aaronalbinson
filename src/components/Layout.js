import React from "react";
import { Link } from "gatsby";
import AaFooter from "./AaFooter/AaFooter";
import Navbar from "../components/Navbar/Navbar";
import Environ from "../components/Environ/Environ";
import "./all.sass";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false, darkMode: true };
  }

  togglePopup() {
    this.setState({ showPopup: !this.state.showPopup });
  }
  toggleDarkMode() {
    this.setState({ darkMode: !this.state.darkMode });
  }

  render() {
    const { children } = this.props;
    return (
      <div id="outer-container" className={this.state.darkMode ? "dark" : "light"}>
        <div id="page-wrap" className={this.state.showPopup ? "show" : "noshow"}>
          <div class="environ-popup" onClick={() => this.togglePopup()}><Environ /></div>
          <div className="top">
            <div className="top-inner container">
              <Link to="/">
                <svg width="60" height="44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50.277 37.71H39.36L37.387 44h-6.68l10.977-30.04h6.289L59.047 44H52.27l-1.993-6.29zm-1.425-4.472l-3.223-10.195-.84-3.066-.86 3.066-3.183 10.195h8.106z" fill="#A28845" /><path d="M.24 44v-4.14c1.12 0 2.02-.32 2.7-.96.68-.64 1.24-1.48 1.68-2.52.48-1.04.94-2.16 1.38-3.36L17.7.92h4.2l12.78 32.7c.24.6.56 1.52.96 2.76.4 1.2.64 2.26.72 3.18.68-.08 1.32-.12 1.92-.12.64-.04 1.16-.06 1.56-.06V44H23.7v-3.96c1.64 0 2.56-.5 2.76-1.5.2-1.04.02-2.3-.54-3.78l-1.2-3.3-13.02.24-.96 2.82-.9 2.34c-.36 1-.7 1.84-1.02 2.52.64-.08 1.4-.12 2.28-.12.92-.04 1.58-.06 1.98-.06V44H.24zM13.2 27.2h10.02l-2.76-7.5c-.52-1.44-.98-2.88-1.38-4.32-.4-1.48-.7-2.78-.9-3.9h-.06l-.72 3.06c-.32 1.36-.82 2.98-1.5 4.86l-2.7 7.8z" fill="#EEE" /></svg>
              </Link>
              <Navbar />
              <div className="right-menu">
                <span onClick={() => this.toggleDarkMode()}>
                  <svg className="mode-toggle" width="35" height="35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.458 32.083H16.14C8.097 31.351 2.247 24.17 2.978 16.108 3.563 9.072 9.121 3.503 16.141 2.917c.586 0 1.17.293 1.463.732.293.44.293 1.173-.146 1.613-1.463 1.905-1.902 4.25-1.61 6.595.293 2.345 1.61 4.397 3.511 5.716a8.543 8.543 0 0010.384 0c.439-.293 1.024-.44 1.61-.146.438.293.73.88.73 1.465-.292 3.958-2.193 7.475-5.265 9.967-2.779 2.052-5.996 3.224-9.36 3.224zM13.363 6.288c-4.242 1.465-7.167 5.276-7.606 9.966-.585 6.45 4.095 12.165 10.53 12.751 3.072.294 6.143-.586 8.484-2.638 1.608-1.319 2.778-3.078 3.51-4.983-3.657 1.32-7.752.733-10.97-1.612-2.486-1.906-4.095-4.544-4.68-7.622-.146-2.052.147-3.957.732-5.862z" fill="#F2F2F2" /></svg>
                </span>
                <span onClick={() => this.togglePopup()}>
                  <svg className="environ-popup-toggle" width="35" height="35" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.467 0c-3.08.004-6.104.813-8.772 2.349a17.582 17.582 0 00-6.43 6.401h4.663v3.507H.722A17.471 17.471 0 000 15.763h5.187v3.507H0c.112 1.245.354 2.475.722 3.67h6.206v3.277H2.265a17.515 17.515 0 006.408 6.422 17.558 17.558 0 0017.54.028 17.516 17.516 0 006.429-6.401 17.476 17.476 0 00.013-17.509 17.515 17.515 0 00-6.418-6.41A17.557 17.557 0 0017.467 0zm4.366 17.5a4.403 4.403 0 01-2.862-1.407 4.387 4.387 0 010-5.936 4.403 4.403 0 017.642 2.968 4.386 4.386 0 01-2.983 4.157 4.408 4.408 0 01-1.797.218z" fill="#EEE" /></svg>
                </span>
              </div>
            </div>
          </div>
          {children}
        </div>
        <AaFooter />
      </div>
    )
  }
}

export default Layout;
