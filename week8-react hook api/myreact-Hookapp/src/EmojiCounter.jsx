import { useState, useEffect } from "react";
import Love from "./Love.png";
import Sad from "./Sad.png";
import Like from "./Like.png";

function EmojiCounter({ pic: SelectedEmoji }) {
  const [image, setImage] = useState(Love);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const EmojiImages = {
      Love,
      Like,
      Sad,
    };

    setImage(EmojiImages[SelectedEmoji] || Love);
  }, [SelectedEmoji]);
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="App">
      <p>
        {SelectedEmoji}
        <button type="button" onClick={handleClick}>
          {count}
          <img src={image} alt={SelectedEmoji} />
        </button>
      </p>
      <p>&nbsp;</p>
    </div>
  );
}

export default EmojiCounter;
