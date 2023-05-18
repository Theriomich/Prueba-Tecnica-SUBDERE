import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import data from "../../books.json";
import "./Cards.css";
//Utilicé tarjetas de Bootstrap
function Cards() {
  return (
    // Itere sobre la data del json que importé, con un map
    <div className="conteinerCards">
      {data.map((book, index) => {
        return (
          <Card
            //El index es el identificador del div, para los elementos que se estan renderizando
            key={index}
            style={{
              width: "20rem",
              background: "#805e18",
              color: "#e2be74",
            }}
          >
            {/* Por cada tarjeta me imprime el titulo del libro como titulo de la tarjeta y me muestra los demas items como lista, en la tarjeta */}
            <h3>{book.title}</h3>
            <ListGroup variant="flush">
              <ListGroup.Item>Autor: {book.author}</ListGroup.Item>
              <ListGroup.Item>País: {book.country}</ListGroup.Item>
              <ListGroup.Item>Idioma: {book.language}</ListGroup.Item>
              <ListGroup.Item>Páginas: {book.pages}</ListGroup.Item>
              <ListGroup.Item>Año: {book.year}</ListGroup.Item>
              <ListGroup.Item>
                {/* El enlace lo hice con etiqueta a, para que al seleccionarlo redirija al link del libro */}
                <a href={book.link}>Enlace</a>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        );
      })}
    </div>
  );
}

export default Cards;
