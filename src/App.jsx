import Navbar from "./components/navbar";
import Movie from "./components/Movie";
import { useState } from "react";

export default function App() {
    const [search, setSearch] = useState("")

    return(
        <div>
        <Navbar search={search} setSearch={setSearch}/>
        <Movie  search={search}/>
        </div>
    )
}