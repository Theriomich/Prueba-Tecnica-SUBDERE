import Footer from "../Footer/Footer";
import NavBar from "../Navbar/Navbar";

function CustomLayout(prop) {
  const children = prop.children;
  return (
    <>
      {/*Para poder mostrar lo que esta dentro de Home
       al envolverlo en el Componente CustomLayout 
       le pasamos la propiedad Children y ahora Home 
       es hijo de CustomLayout. Este componente se 
       puede reutilizar si tuviesemos más paginas,
        para mostrar en todas el Navbar y Footer */}
      <NavBar />
      {children}
      <Footer />
    </>
  );
}

export default CustomLayout;
