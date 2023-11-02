import { useState } from 'react';
import Card from './Card';

const Formulario = () => {
  //creamos los useState (estado)
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");
  const [error, setError] = useState("");
  const [card, setCard] = useState(false);

  //captura el ingreso de codigo del input
  const onChangeNombre = (e) => setNombre(e.target.value);
  const onChangePais = (e) => setPais(e.target.value);

  //validando datos de input
  const validarInputNombre = () => {
    return nombre.trim().length >= 3;
  };
  const validarInputPais = () => {
    return pais.trim().length >= 6;
  };

  const handleOnSubmit = (e) => {
    //reinicio por defecto
    e.preventDefault();

    //guardando los datos ingresados
    const validaNombre = validarInputNombre();
    const validaPais = validarInputPais();

    //condiciones para los estados de error y show card
    if (validaNombre && validaPais) {
      setCard(true);
      setError("Formulario completado");
    } else {
      setCard(false);
      setError("Por favor chequea que la información sea correcta");
      console.log(`${pais}, es el País favorito de ${nombre}`);
    }
  };

  return (
    <>
    <div className='formulario'>
      <form className= 'boxforms' onSubmit={handleOnSubmit}>
        <input
          type="text"
          placeholder=" Ingresa tu nombre"
          id="nombre"
          value={nombre}
          onChange={onChangeNombre}
        />
        <input
          type="text"
          placeholder=" Ingresa tu PAIS favorito"
          id="pais"
          value={pais}
          onChange={onChangePais}
        />
        <input type="submit" value="Enviar" />
        {!card ? null : <Card nombre={nombre} pais={pais} />}
        {error ? <p>{error}</p> : null}
      </form>
      </div>
    </>
  );
};

export default Formulario;
