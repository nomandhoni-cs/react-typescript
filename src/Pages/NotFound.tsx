import { Typography } from "@material-tailwind/react";
import Header from "../components/Header";
const NotFound: React.FC = () => {
    document.title = "404 Not Found | Shortly"
    return (
        <>
            <Header />
            <div className="container">
            <Typography variant="h1" color="red" className="text-center">
                404 Page Not Found
            </Typography>
            </div>
        </>
    )
}

export default NotFound