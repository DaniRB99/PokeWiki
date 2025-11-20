import { useState } from "react";

function GetForm() {
    const [from, setFrom] = useState();
    const [to, setTo] = useState();

    const handleFromInput = (e:React.InputEvent) => {
        setFrom(e.target.value);
    }

    const handleToInput = (e:React.InputEvent) => {
        setTo(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefulat();
        console.log(FormData, to);
    }

    return (
        <form>
            <fieldset>
                <label htmlFor="from-pokemon">From: </label>
                <input type="number" id="from-pokemon" min={1} onChange={handleFromInput} />
            </fieldset>
            <fieldset>
                <label htmlFor="to-pokemon">To: </label>
                <input type="number" id="to-pokemon" min={1} onChange={handleToInput} />
            </fieldset>
        </form>
    )
}

export default GetForm