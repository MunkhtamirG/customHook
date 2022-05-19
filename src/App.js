import "./App.css";
import Header from "./components/Header";
import { useFetch } from "../src/API/fetchHook";
import Loading from "./components/Loading";
import Error from "./components/Error";
import { useState } from "react";
import Link from "./components/Link";

function App() {
  const [data, loading, error] = useFetch("https://randomuser.me/api");
  const [selected, setSelected] = useState("");
  const names = ["youtube", "google", "gogo"];
  const style = {
    outer: {
      display: "flex",
      width: "100%",
      justifyContent: "space-around",
    },
    inner: {
      backgroundColor: "grey",
      padding: "20px",
      borderRadius: "20px",
      fontSize: "40px",
    },
  };
  if (loading) return <Loading />;
  if (error) return <Error />;
  const styleInner = {
    paddingTop: "35vh",
  };

  return (
    <div className="App" s>
      <Header />
      <div style={styleInner}>
        <p>{data && data.results[0].cell}</p>
        <img src={data?.results[0].picture.large} alt="" />
      </div>
      <div style={style.outer}>
        {names.map((e, i) => {
          return (
            <Link
              key={i}
              name={e}
              selected={selected === e}
              onclick={() => {
                setSelected(e);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
