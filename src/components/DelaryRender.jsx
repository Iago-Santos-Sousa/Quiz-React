import React from "react";
import { useState } from "react";

const DelaryRender = () => {
  const [hide, setHide] = useState(true);

  setTimeout(() => setHide(false), 3000);

  return (
    <div>
      <h1>testing delay render</h1>

      {!hide ? <div>ola</div> : null}
    </div>
  );
};

export default DelaryRender;
