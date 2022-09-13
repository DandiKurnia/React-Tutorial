const Home = () => {

    const hadleClick = (e) =>{
        console.log('hello, ninjas', e);
    }

    const handleClickAgain = (name, e)=>{
        console.log('hello ' + name, e.target);
    }

    return (
        <div className="home">
            <h2>Home page</h2>
            <button onClick={hadleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('dandi', e)}>Click me again</button>
        </div>
    );
}
 
export default Home;