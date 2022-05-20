import "./App.css";
import Header from "./components/Header";
import { useFetch } from "../src/API/fetchHook";
import Loading from "./components/Loading";
import Error from "./components/Error";
import { useState } from "react";
import Link from "./components/Link";
import moment from "moment";

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
    paddingTop: "15vh",
  };
  let date = data && data.results[0].dob.date;
  let momentDate = moment(date).format("YYYY оны MM сарын DD ны өдөр төрсөн");
  console.log(data);
  return (
    <div className="App" s>
      <Header />
      <div style={styleInner}>
        <h3>
          Name: <span>{data?.results[0].name.title}</span>
          <> </>
          <span>{data?.results[0].name.first}</span>
          <> </>
          <span>{data?.results[0].name.last}</span>
        </h3>
        <h3>Phone: {data?.results[0].cell}</h3>
        <img src={data?.results[0].picture.large} alt="" />
        <h3>{momentDate}</h3>
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
