import CurdInput from'./CurdInput'
function CurdForm(props){


    return(
        <form>
            <CurdInput new_data={props.new_data} userdata={props.userdata} get_input={props.get_input} />
        </form>
        
    )
}

export default CurdForm