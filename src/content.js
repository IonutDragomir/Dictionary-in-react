import { useState } from "react";
import { SideBox } from "./content/sideBox";
import { AddButton } from "./content/buttons";
import { SearchButton } from "./content/buttons";

export function Content() {
  const [dictionary, setDictionary] = useState([]);
  const [errorMessage, setErrorMessage] = useState("Hello!");

  return (
    <div className="Content">
      <div className="header"></div>

      <SideBox message={errorMessage} />

      <div className="InnerContainer">
        <h1 className="Title">Dictionary</h1>
        <input
          className="insertWords"
          id="text"
          type="text"
          placeholder="add/search word.."
        />

        <AddButton
          dictionary={dictionary}
          setDictionary={setDictionary}
          setErrorMessage={setErrorMessage}
        />

        <SearchButton
          dictionary={dictionary}
          errorMessage={errorMessage}
          setDictionary={setDictionary}
          setErrorMessage={setErrorMessage}
        />

        <div className="Dictionary">
          <p style={{ color: "#125f9b", fontWeight: 600 }}> Words:</p>
          <div id="ShowDictionary" style={{ color: "#125f9b" }}>
            {dictionary.map((element) => " " + element)}
          </div>
        </div>
      </div>
    </div>
  );
}
