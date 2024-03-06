import { useEffect, useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Drawer from "@mui/material/Drawer";
import { IconButton, Switch } from "@mui/material";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
    const mode = localStorage.getItem("theme");
    if (mode === "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div>
      <IconButton
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuRoundedIcon className="link" />
      </IconButton>

      <Drawer
        anchor={"right"}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className="drawer-div">
          <Link to="/">
            <p className="link">Home</p>
          </Link>
          <Link to="/Compare">
            <p className="link">compare</p>
          </Link>
          <Link to="/WatchList">
            <p className="link">watchlist</p>
          </Link>
          <Link to="/Dashboard">
            <p className="link">Dashboard</p>
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <p className="link">{darkMode ? "Light Mode" : "Dark Mode"}</p>
            <Switch
              checked={darkMode}
              onClick={() => {
                changeMode();
              }}
            />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
