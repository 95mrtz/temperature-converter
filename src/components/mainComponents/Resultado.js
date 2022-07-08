const Resultado = ( {temp} ) => {
    return ( 
        <div>
            {temp !== 0 ? temp : null}
        </div>
     );
}
 
export default Resultado;