import React from "react";
import Block from "./index";
import pie from "../../OtherStuff/Holding"

function Blocklock(props: any) {

    let {draw} = props
    return (<span> {draw.map((item: any) => <Block data={item} pie={pie}/>)} </span>)
}


export default Blocklock;