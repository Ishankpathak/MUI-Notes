import Form from "./Components/Form";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import Modals from "./Components/Modals";
import Containers from "./Components/Containers";
import ListComponent from "./Components/ListComponent";
import Accord from "./Components/Accord";
import DrawerMenu from "./Components/DrawerMenu";
import ResponsiveGrid from "./Components/ResponsiveGrid";

const App = () => {
  return (
    <div>
      <Navbar />
      <Form />
      <div
        style={{
          marginTop: 100,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          margin: "1rem",
          flexDirection: "column",
        }}
      >
        <Cards />
        <Modals />
        <Containers />
        <ListComponent />
        <Accord />
        <DrawerMenu />
      </div>
        <ResponsiveGrid />
    </div>
  );
};

export default App;
