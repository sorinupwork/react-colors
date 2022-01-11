import React from "react";

function PaletteFooter(props) {
  const { palleteName, emoji } = props;
  return (
    <footer className="Pallete-footer">
      {palleteName}
      <span className="emoji">{emoji}</span>
    </footer>
  );
}

export default PaletteFooter;
