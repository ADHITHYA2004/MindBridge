
function New(props) {
    // let e="adhi";
    // function plus(){
    //     let a=10;
    //     let b=20;
    //     let c=a+b
    //     return (
    //         <h1>{c}</h1>
    //     )
    // }

    const handleClick = (e) => {
        alert(e);
        // plus()
    }
    return (
        <div>
            <h1 style={props}>Hii {props.color}</h1>
            <button onClick={() => handleClick("adhi!")}>click</button>
            {/* <h3>{plus()}</h3> */}

        </div>

    )
}

export default New