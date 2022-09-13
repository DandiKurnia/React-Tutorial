// React Dev Tools
import { useState } from "react";

const Home = () => {
    // let name = 'dandi';
    const [name, setName] = useState('dandi');
    const [age, setAge] = useState(25);

    const hadleClick = () =>{
        setName('kurnia');
        setAge(17);
    }

    return (
        <div className="home">
            <h2>Home page</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={hadleClick}>Click me</button>
        </div>
    );
}
 
export default Home;