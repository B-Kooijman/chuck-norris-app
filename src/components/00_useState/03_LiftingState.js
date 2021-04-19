import { useState } from "react";

const ChildComponent = ({ clickHandler }) => (
  <>
    <p>
      When Chuck Norris does a pushup, he isn't lifting himself up, he's pushing
      the Earth down.
    </p>
    <button onClick={clickHandler}>like!</button>
  </>
);

const LiftingState = () => {
  const [likes, setLikes] = useState(0);
  const likeUpdater = () => setLikes((likes) => likes + 1);

  return (
    <div className="box">
      <div>{likes} likes</div>
      <ChildComponent clickHandler={likeUpdater} />
    </div>
  );
};

// const ChildComponent2 = ({ likeState }) => {
//   console.log(likeState);
//   return (
//     <div>
//       {likeState?.likes > 5 && <span> Top Fact about Chuck!</span>}
//       <p>
//         When Chuck Norris does a pushup, he isn't lifting himself up, he's
//         pushing the Earth down.
//       </p>
//       <button onClick={likeState?.likeUpdater}>like!</button>
//     </div>
//   );
// };

// const ParentComponent2 = () => {
//   const [likes, setLikes] = useState(0);
//   const likeUpdater = () => setLikes((likes) => likes + 1);

//   return (
//     <div className="box">
//       <div>{likes} likes</div>
//       <ChildComponent2 likeState={{ likes, likeUpdater }} />
//     </div>
//   );
// };

export default LiftingState;
