import React from 'react'

interface props {
    cargaInicial:ListProps[];
    id_depa:number;
   // onSelectedIndexChanged1: (data: number) => void;
}

type ListProps = {
        id:number,
        departamento:String,
        municipios:string[]
};

const SelectInputMun:React.FC<props> = ({cargaInicial,id_depa}) => {
    console.log('cargaInicial',cargaInicial,'id_depa',id_depa);
    return (
        <div>
          <h2>Lista Municipios</h2>
          <hr />
          <select name="list" id="list">
            <option>seleccione</option>
            {cargaInicial.map((e) => {
              if (e.id === id_depa) {
                // Si el ID del departamento coincide, mapeamos los municipios
                return e.municipios.map((item, dos) => (
                  <option key={dos} value={item}>
                    {item}
                  </option>
                ));
              }
              return null; // Si no coincide, devolvemos null (sin opciones)
            })}
          </select>
        </div>
      );
      
}

export default SelectInputMun
