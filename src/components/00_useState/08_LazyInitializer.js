import { useState, useEffect } from "react";

const key = "likes";

const ChildComponent = ({ clickHandler }) => (
  <>
    <p>
      When Chuck Norris does a pushup, he isn't lifting himself up, he's pushing
      the Earth down.
    </p>
    <button onClick={clickHandler}>like!</button>
  </>
);

const getLikesFromSession = () => {
  console.log("executed: getLikesFromSession")
  const likes = Number(localStorage.getItem(key));
  return Number.isNaN(likes) || !likes ? 0 : likes;
}

const LazyInitializer = () => {

  //Look at the logs, what do you notice when you rerender?

  const [likes, setLikes] = useState(getLikesFromSession());
  const likeUpdater = () => setLikes((likes) => likes + 1);

  useEffect(() => localStorage.setItem(key, likes), [likes]);

  return (
    <div className="box">
      <div>{likes} likes</div>
      <ChildComponent clickHandler={likeUpdater} />
    </div>
  );
};

export default LazyInitializer;
