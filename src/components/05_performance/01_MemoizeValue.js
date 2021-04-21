import { useEffect, useState, useMemo } from "react";

const MemoizeValue = () => {
  const [likes, setLikes] = useState(0);
  const [multipliedLikes, setMultipliedLikes] = useState(0);

  // 1 no performance optimization
  // const multiplier = () => {
  //   console.log("executed multiplier");
  //   return likes * 10;
  // };

  // useEffect(() => {
  //   setMultipliedLikes(multiplier);
  // });

  // 2 useMemo, memorizes the value (cache), the cache logic is heavy extra work!
  // const multiplier = useMemo(() => {
  //   console.log("executed multiplier");
  //   return likes * 10;
  // }, [likes]);

  // useEffect(() => {
  //   console.log("useMemo value", multiplier);
  //   setMultipliedLikes(multiplier);
  // });

  // 3 with usEffect, same result, only the side effect is just skipped, instead of checking the cache
  const multiplier = () => {
    console.log("executed multiplier")
    return likes * 10;
  }
  useEffect(() => {
    setMultipliedLikes(multiplier)
  }, [likes])

  const clickHandler = () => setLikes((likes) => likes + 1);

  return (
    <div className="box">
      <div>{likes} likes</div>
      <div>{multipliedLikes} multipliedLikes</div>
      <br />
      <p>
        When Chuck Norris does a pushup, he isn't lifting himself up, he's
        pushing the Earth down.
      </p>

      <button onClick={clickHandler}>like</button>
    </div>
  );
};

export default MemoizeValue;
