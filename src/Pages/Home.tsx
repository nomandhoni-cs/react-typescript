import { useState } from "react"
import InputBox from "../components/InputBox"

const Home: React.FC = () => {
    document.title = "Shortly - Make your link Shorter";
    const [inputLink, setInputLink] = useState<string>("")
    console.log(inputLink);
    return (<>
        <div className="mx-auto max-w-screen-xl">
            <InputBox inputLink={inputLink} setInputLink={setInputLink} />
        </div>
    </>
    )
}

export default Home