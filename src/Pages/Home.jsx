import "./Home.css";
import CustomLayout from "../Components/CustomLayout/CustomLayout";
import Cards from "../Components/Cards/Cards";

function Home() {
  return (
    <div className="home">
      {/* En el Home paso el componente CustomLayout, que ahora es el padre de Home y que incluye Navbar y Footer */}
      <CustomLayout>
        <h1>Soy Home</h1>
      </CustomLayout>
    </div>
  );
}

export default Home;
