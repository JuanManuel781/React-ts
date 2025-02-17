
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

    /* const municipios = useMemo(()=>{
        const dep =cargaInicial.find((el)=>el.id===id_depa);
        return dep?.municipios || [];
    },[id_depa,cargaInicial])
 */

    const municipios = ()=>{
        const dep =cargaInicial.find((el)=>el.id===id_depa);
        return dep?.municipios ;
    }
    return (
        <div>
          <h5>Lista Municipios</h5>
          <hr />
          <select className="form-select" aria-label="Default select example" name="list" id="list">
            <option>SELECCIONE MUNICIPIO</option>
           {municipios()?.map((item, dos) => (
                  <option key={dos} value={item}>
                    {item}
                  </option>
                ))}  
          </select>
        </div>
      );
      
}

export default SelectInputMun
