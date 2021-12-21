let book = [];

export const InputText = () => {
    return (
      <div className="InputText">
        <input
          className="insertWords"
          id="text"
          type="text"
          placeholder="search.."
        />
  
        <div>
          <button className="insertButton" onClick={() => InsertWords()}>
            Insert
          </button>
          <button className="showButton" onClick={() => ShowDictionary()}>
            Show Dictionary
          </button>
          <button className="hideButton" onClick={() => ShowDictionary("hide")}>
            Hide dictionary
          </button>
        </div>
      </div>
    );
  };

 function InsertWords() {
    let word = document.getElementById("text").value;
    if (word === "")
      return (document.getElementById(
        "errorMessage"
      ).innerHTML += `<p> Can't add empty space in dictionary.</p>`);
    for (let i = 0; i <= book.length - 1; ++i) {
      if (word === book[i])
        return (document.getElementById(
          "errorMessage"
        ).innerHTML += `<p> The word is already inserted.</p>`);
    }
    book.push(word);
  }
  
   function ShowDictionary(hide) {
    if (hide) return (document.getElementById("ShowDictionary").innerHTML = ``);
  
    if (book.length > 0)
      return (document.getElementById(
        "ShowDictionary"
      ).innerHTML = `<p>${book} </p>`);
    document.getElementById(
      "errorMessage"
    ).innerHTML += `<p> No Words inside dictionary.</p>`;
  }