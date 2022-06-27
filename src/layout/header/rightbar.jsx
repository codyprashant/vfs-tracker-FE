import React, { Fragment, useState, useEffect } from 'react';
import {  Maximize} from 'react-feather';
import { useTranslation } from "react-i18next";


const Rightbar = () => {

  const [moonlight, setMoonlight] = useState(false)
  const { i18n } = useTranslation();
  const [selected, setSelected] = useState('en');

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
    setSelected(lng);
  };




  useEffect(() => {
    if (localStorage.getItem("layout_version") === "dark-only") {
      setMoonlight(true)
    }
    i18n.changeLanguage('en');
  }, []);

  //full screen function
  function goFull() {
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
      (!document.mozFullScreen && !document.webkitIsFullScreen)) {
      if (document.documentElement.requestFullScreen) {
        document.documentElement.requestFullScreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullScreen) {
        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else {
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
  }

  const MoonlightToggle = (light) => {
    if (light) {
      setMoonlight(!light)
      document.body.classList.add("light");
      document.body.classList.remove("dark-only");
      // document.body.className = "light"
      localStorage.setItem('layout_version', 'light');
    } else {
      setMoonlight(!light)
      document.body.classList.remove("light");
      document.body.classList.add("dark-only");
      // document.body.className = "dark-only"
      localStorage.setItem('layout_version', 'dark-only');
    }
  }

  return (
    <Fragment>
      <div className="nav-right col-8 pull-right right-header p-0">
        <ul className="nav-menus">
          <li>
            <div className="mode" onClick={() => MoonlightToggle(moonlight)} >
              {moonlight ? <i className="fa fa-lightbulb-o"></i> : <i className="fa fa-moon-o"></i>}
            </div>
            {/* <div className="mode" onClick={() => MoonlightToggle(moonlight)}><i className={`fa ${moonlight ? 'fa-lightbulb-o' : 'fa-moon-o'}`}></i></div> */}
          </li>

          <li className="maximize align-right"><a className="text-dark" href="#javascript" onClick={goFull}><Maximize /></a></li>
          
        </ul>
      </div>
    </Fragment>

  );
}
// export default translate(Rightbar);
export default Rightbar;