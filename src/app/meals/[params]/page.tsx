import { PropsWithChildren } from "react";

type Props = {
    params: {
        params:string
    }
}

const Meals = function(props:PropsWithChildren<Props>) {
    return (
        <>
        <p style={{color:"black"}}>{props.params.params}</p>
        </>
    )
}

export default Meals;