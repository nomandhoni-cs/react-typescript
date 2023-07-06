import { Link } from "react-router-dom"

const Home = () => {
    return (<>
        <h1>Home</h1>
        <button>
            <Link to="about">About</Link>
        </button>
    </>
    )
}

export default Home