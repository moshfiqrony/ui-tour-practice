/* eslint-disable */
import React from "react";
import "./styles.css";
import Joyride from "react-joyride";

export default function App() {
  const steps = [
    {
      disableBeacon: true,
      target: ".home-tab",
      showSkipButton: true,
      content: "By clicking here you will be redirectde to the home page"
    },
    {
      disableBeacon: true,
      target: ".link-tab",
      content: "By clicking here you will be redirectde to the link page"
    },
    {
      disableBeacon: true,
      target: ".dropdown-tab",
      content: "By clicking here it will show a dropdown"
    },
    {
      disableBeacon: true,
      target: ".disabled-tab",
      content: "By clicking here nothing will happen beacuse it is disabled"
    },
    {
      disableBeacon: true,
      target: ".search-tab",
      content: "By clicking here app will search"
    }
  ];
  return (
    <div className="App">
      <Joyride
        steps={steps}
        continuous={true}
        showProgress={true}
        locale={{ last: "Finish" }}
      />
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link home-tab" href="#">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link link-tab" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle dropdown-tab"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">
                  Action
                </a>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
                <div class="dropdown-divider" />
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled disabled-tab" href="#">
                Disabled
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn search-tab btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
