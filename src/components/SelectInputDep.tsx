import React from 'react'


interface props {
    cargaInicial:ListProps[];
    onSelectedIndexChanged1: (data: number) => void;
}

type ListProps = {
        id:number,
        departamento:String,
        municipios:string[]
};

const SelectInputDep : React.FC<props> = ({cargaInicial,onSelectedIndexChanged1}) => {    
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('e.target',e.target.value);
        const selectedId = parseInt(e.target.value);
        
        onSelectedIndexChanged1(selectedId);

      };
  return (
    <div>
      <h2>Lista Departamentos</h2>  
      <hr/>
      <select name="list" id="list" onChange={handleChange}>
        <option>seleccione</option>
      {cargaInicial.map((item, index) => {
        
          return (
            <option key={index} value={item.id}>
              {item.departamento}
            </option>
          );
        })}
      </select>
    </div>
  )
}

export default SelectInputDep
