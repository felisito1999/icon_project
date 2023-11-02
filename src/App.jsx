import React, { useState } from "react";
import optIcons from "./icons";
import "./App.css";

function App() {
  const [icons, setIcons] = useState(optIcons);
  const [selectedIcon, setSelectedIcon] = useState({});

  const setIconInfo = (icon) => {
    setSelectedIcon((prevState) => {
      if (prevState == null || prevState.name == null) {
        return { ...icon };
      }

      if (prevState.name == icon.name) {
        return {};
      }

      return icon;
    });
  };

  const goToSource = (name) => {
    navigator.clipboard.writeText(name);
    const goToSource = window.confirm(
      `${name} was copied to the clipboard. Do you want to go to react-icons?`
    );

    if (goToSource) {
      window.open(`https://react-icons.github.io/react-icons/search?q=${name}`);
    }
  };

  const handleIconSearchOnChange = (e) => {
    if (e.target.value === "" || e.target.value == null) {
      setIcons(optIcons);
      return;
    }

    const filteredIcons = optIcons.filter((item) =>
      item.name
        .normalize("NFC")
        .toLocaleLowerCase()
        .includes(e.target.value.normalize("NFC").toLocaleLowerCase())
    );
    setIcons(filteredIcons);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="form-group">
          <label htmlFor="icon_name">Search</label>
          <input
            type="text"
            name="icon_name"
            placeholder="Type an icon name"
            onChange={handleIconSearchOnChange}
          />
        </div>
      </form>
      <div className="icon-container">
        {icons && icons.length == 0 ? (
          <h2 className="search-message">No item was found</h2>
        ) : (
          icons.map((item, index) => (
            <div
              className={
                selectedIcon && selectedIcon.name == item.name
                  ? "icon-item selected"
                  : "icon-item"
              }
              key={index}
              onClick={(e) => setIconInfo(item)}
            >
              <p>{item.name}</p>
              <div className="icon-wrapper">
                {item.icons.map((icon, iconIndex) => (
                  <div
                    className="icon"
                    key={iconIndex}
                    onClick={(e) => goToSource(icon.type.name)}
                  >
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default App;
