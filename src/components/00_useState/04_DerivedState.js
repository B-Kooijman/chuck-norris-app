import { useEffect, useState } from "react";

// const ChildComponent = ({ likeState }) => {
//   const [isTopfact, setTopFact] = useState();

//   useEffect(() => {
//     setTopFact(true);
//   }, [likeState.likes >= 5]);

//   return (
//     <div>
//       {isTopfact && <span> Top Fact about Chuck!</span>}
//       <p>
//         When Chuck Norris does a pushup, he isn't lifting himself up, he's
//         pushing the Earth down.
//       </p>
//       <button onClick={likeState?.likeUpdater}>like!</button>
//     </div>
//   );
// };

// const DerivedState = () => {
//   const [likes, setLikes] = useState(0);
//   const likeUpdater = () => setLikes((likes) => likes + 1);

//   return (
//     <div className="box">
//       <div>{likes} likes</div>
//       <ChildComponent likeState={{ likes, likeUpdater }} />
//     </div>
//   );
// };

const ChildComponent2 = ({ likeState }) => 
    <div>
      {likeState?.likes >= 5 && <span>Top Fact about Chuck!</span>}
      <p>
        When Chuck Norris does a pushup, he isn't lifting himself up, he's
        pushing the Earth down.
      </p>
      <button onClick={likeState?.likeUpdater}>like!</button>
    </div>

const DerivedState2 = () => {
  const [likes, setLikes] = useState(0);
  const likeUpdater = () => setLikes((likes) => likes + 1);

  return (
    <div className="box">
      <div>{likes} likes</div>
      <ChildComponent2 likeState={{ likes, likeUpdater }} />
    </div>
  );
};

export default DerivedState2;
