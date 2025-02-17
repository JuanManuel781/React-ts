import React from 'react'


interface props {
    cargaInicial: ListProps[];
    onSelectedIndexChanged1: (data: number) => void;
}

type ListProps = {
    id: number,
    departamento: String,
    municipios: string[]
};

const SelectInputDep: React.FC<props> = ({ cargaInicial, onSelectedIndexChanged1 }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log('e.target', e.target.value);
        const selectedId = parseInt(e.target.value);
        onSelectedIndexChanged1(selectedId);
    };
    return (
        <div>
            <h5>Lista Departamentos</h5>
            <hr />
            <select className="form-select" aria-label="Default select example" name="list" id="list" onChange={handleChange}>
                <option>SELECCIONE DEPARTAMENTO</option>
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
