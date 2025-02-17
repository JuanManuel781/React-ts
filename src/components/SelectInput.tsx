import React from "react";

type ListProps = {
  onSelectedIndexChanged: (data: number) => void;
  cargaInicial: string[];
};
const InputSelect: React.FC<ListProps> = ({
  cargaInicial,
  onSelectedIndexChanged,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectedIndexChanged(e.target.selectedIndex);
  };

  return (
    <div>
      <select name="list" id="list" onChange={handleChange}>
        {cargaInicial.map((item, index) => {
          return (
            <option key={index} value={index}>
              {item}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputSelect;
