import {
    Input,
    Checkbox,
    Button,
    Typography,
} from "@material-tailwind/react";
interface Props {
    inputLink: string,
    setInputLink: React.Dispatch<React.SetStateAction<string>>
}
const InputBox: React.FC<Props> = ({ inputLink, setInputLink }) => {
    return (
        <>
                <Typography variant="h2" color="blue-gray" className="text-center">
                    Shortly
                </Typography>
                <Typography color="gray" className="mt-1 font-normal text-center">
                    Enter the link you want to make short.
                </Typography>
                <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-[100%] mx-auto">
                    <div className="mb-4 flex flex-col gap-6">
                        <Input size="lg" label="Long Link" value={inputLink} onChange={(e) => setInputLink(e.target.value)} />
                    </div>
                    <Checkbox
                        label={
                            (
                                <Typography
                                    variant="small"
                                    color="gray"
                                    className="flex items-center font-normal"
                                >
                                    Generate QR Code
                                </Typography>
                            )
                        }
                        containerProps={{ className: "-ml-2.5" }}
                    />
                    <Button className="mt-6" fullWidth>
                        Submit
                    </Button>
                </form>
        </>
    )
}

export default InputBox