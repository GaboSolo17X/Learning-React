export const App = () => {
  return <h1>Hola Mundo!!!</h1>;
};


import PropTypes from 'prop-types'
export const App2 = ({ title }) => {

  if (!title){
    throw new Error('El titulo no existe')
  }

  return (
    <>
      <h1>{ title }</h1>
      <h1>Hola Mundo!!!</h1>
    </>
  );
};

App2.propTypes={
    title: PropTypes.string.isRequired
}