import React from "react";
import Button from "react-bootstrap/lib/Button";

require("./Environ.scss");

class Environ extends React.Component {
    render() {
        return (
            <div className="environ">
                <div className="popup-inner">
                    <div className="popup-top">
                        <h2>Environ Digital</h2>
                        <svg width="136" height="136" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M67.87 0a68.529 68.529 0 00-34.082 9.118 68.286 68.286 0 00-24.985 24.85h18.116v13.611H2.807A67.767 67.767 0 000 61.192h20.157v13.612H0a69.67 69.67 0 002.807 14.248h24.111v12.722H8.804A68.026 68.026 0 0033.7 126.703a68.272 68.272 0 0034.064 9.165 68.264 68.264 0 0034.094-9.056 68.024 68.024 0 0024.978-24.849A67.789 67.789 0 00136 67.987a67.793 67.793 0 00-9.11-33.99 68.034 68.034 0 00-24.94-24.888A68.273 68.273 0 0067.87 0zm16.968 67.934a17.114 17.114 0 01-11.124-5.461 17.021 17.021 0 01-4.496-11.522c0-4.267 1.605-8.378 4.496-11.523a17.114 17.114 0 0111.124-5.46 17.14 17.14 0 016.98.844 17.107 17.107 0 016.05 3.575 17.052 17.052 0 014.094 5.701 17.002 17.002 0 010 13.725 17.052 17.052 0 01-4.094 5.701 17.107 17.107 0 01-6.05 3.576 17.14 17.14 0 01-6.98.844z" fill="#EEE" /></svg>
                    </div>
                    <p>Environ Digital is a small website development company founded in 2018 by Aaron Albinson. The aim is to not only build beautiful websites for small companies but to help them make the most of the possibilities of the tools available online.</p>
                    <div className="popup-bottom">
                        <Button>close</Button>
                        <a href="https://environ.digital">
                            <Button>find out more</Button>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Environ;
