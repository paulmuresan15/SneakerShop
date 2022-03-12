import React from "react";

interface Props {
  onClick: () => void;
}

const Button_right: React.FC<Props> = ({
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
    >
        Next image
    </button>
  );
};

export default Button_right;
