import { useState } from "react";

function CheckBox() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      <div>
        <p>{checked ? "Checked" : "not checked"}</p>
        <input
          type="checkbox"
          value={checked}
          onChange={() => {
            setChecked(!checked);
          }}
        />
      </div>
    </>
  );
}

export default CheckBox;
