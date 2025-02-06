function CurdInput(props) {
    // console.log(props.userdata)

    return (
        <div>
            {props.userdata.map(ele =>
                <div>
                    <label>{ele.Name}</label>
                    <input name={ele.Name} value={props.new_data} onChange={props.get_input}></input>
                </div>
            )}
        </div>
    )
}
export default CurdInput