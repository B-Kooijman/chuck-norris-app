import { useState } from "react";
import FactOnSubmit from "./FactOnSubmit";

function FactOnToggle() {
  const [mounted, setMounted] = useState(true);

  return (
    <>
      <button onClick={() => setMounted(false)}>Unmount the component!!</button>
      {mounted && <FactOnSubmit />}
    </>
  );
}

export default FactOnToggle;
