import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faEdit, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

function App() {
    //const [edit, setedit] = useState({ id: null, value: "" })

    const [list, setlist] = useState(["A Item"]);


    const [text, settext] = useState("");

    function changetext(event) {
        const value = event.target.value;
        settext(value);
    }

    function cutout(index) {
        let name = index;
        list.splice(name, 1);
        console.log(list);
        setlist([...list]);
    }

    function additem(event) {
        if (text !== "") {

            setlist([...list, text]);
            console.log(list);
            settext("");
        }
    }
    return ( <
        div className = "container" >
        <
        div className = "heading" >
        <
        h1 > To - Do List < /h1> < /
        div > <
        div className = "form" >
        <
        input type = "text"
        value = { text }
        onChange = { changetext }
        /> <
        button onClick = { additem } >
        <
        span > Add < /span> < /
        button > <
        /div> <
        div >
        <
        ul > {
            list.map((obj, index) => {
                const classo = "wrong";

                return ( <
                    li key = { index.toString() } >


                    <
                    div > < span > {
                        obj
                    } < /span> < button className = { classo }
                    name = { index.toString() }
                    onClick = {
                        () => {
                            cutout({ index });
                        }
                    } > < FontAwesomeIcon icon = { faTimesCircle }
                    style = {
                        { fontSize: "20px" }
                    }
                    /> < /button > < /div > < /
                    li >
                );
            })
        } <
        /ul> < /
        div > <
        /div>
    );
}

export default App;