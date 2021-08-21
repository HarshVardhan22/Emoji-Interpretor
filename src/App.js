import React, { useState } from "react";
import styles from "./App.module.css";
import { data } from "./Data";
import Bounce from "react-reveal/Bounce"

const App = () => {
  //converting data object into array
  const emojiArr = Object.keys(data);

  const [value, setValue] = useState("");
  const [emoji, setEmoji] = useState("");
  const [error, setError] = useState(false);

  const [emojiName, setEmojiName] = useState("");
  //const []

  const handleChange = (e) => {
    setValue(e.target.value);
    for (let item of emojiArr) {
      if (e.target.value === item) {
        setEmojiName(data[e.target.value]);
        setEmoji(e.target.value);
        setError(false);
        return;
      }
    }
    setError(true);
  };

  const handleClick = (selectedEmoji) => {
 
    for (let item of emojiArr) {
      if (item === selectedEmoji) {
        setEmojiName(data[selectedEmoji]);
        setEmoji(selectedEmoji);
        setError(false);
      }
    }
  };

  return (
    <div className={styles.parent}>
    <Bounce
    left>
  <div >
    <h1 className={styles.text}>Emoji</h1>
    <h2 className={styles.text}>Interpreter</h2>

    </div>
  
    
  
      <div className={styles.container}>
        <input
          type="text"
          placeholder={value === "" ? "Search You Emoji" : ""}
          value={value}
          onChange={handleChange}
        />
        {!error && (
          <div className={styles.result}>
            <h2>{emoji}</h2>
            <h3>{emojiName}</h3>
          </div>
        )}

        {error && (
          <div className={styles.result}>
            <h1 style={{ color: "crimson" }}>Emoji Not Found</h1>
          </div>
        )}

        <div className={styles.childContainer}>
          {emojiArr.map((item, index) => {
            return (
              <h1 className ={styles.emoji}
                key={index}
                onClick={() => {
                  handleClick(item);
                }}
              >
                {item}
              </h1>
            );
          })}
        </div>
      </div>
      </Bounce>
    </div>
  );
};

export default App;
