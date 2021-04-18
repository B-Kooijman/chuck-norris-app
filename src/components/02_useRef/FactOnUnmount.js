import { useState } from "react";
import FactOnSubmit from "./FactOnSubmit";

function FactOnUnmount() {
  const [mounted, setMounted] = useState(true);

  return (
    <>
      <button onClick={() => setMounted(false)}>Unmount the component!!</button>
      {mounted && <FactOnSubmit />}
    </>
  );
}

export default FactOnUnmount;
