import { useState } from "react";

const Updater = () => {

  const [like, setLike] = useState(false);

  // 1 regular state update
  const regularUpdater = () => setLike(!like)

  // 2 functional state update
  const functionalUpdater = () => setLike(like => !like)

  return (
    <div className="box">
      <div>{like ? <span style={{color: "red"}}>liked</span> : <span>like</span>}</div>
      {/* synthetic events */}
      <button onClick={regularUpdater}>like this fact witch regular updater</button>
      <button onClick={functionalUpdater}>like this fact with functional updater</button>
      <p>When Chuck Norris does a pushup, he isn't lifting himself up, he's pushing the Earth down.</p>
    </div>
  );
};

export default Updater;
