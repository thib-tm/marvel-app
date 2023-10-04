function Title({ color = 'red', children, hidden = false, name="pol" }) {
  if (hidden) {
      return null;
  }

  return (<h1 style={{color: color}}> Hello world {name}</h1>);
}

function App() {
return (
  <>
    {/* 
        La propriété id et data-demo sont passées au composant Title grâce au spread operator.
        La propriété color est définie dans le composant Title
     */}
    <Title color="blue"></Title>
  </>
);
}

export default App;
