
function CrudTable(props){


    return(
        <div>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.user.map(ele=>
                        <tr>
                            <td>{ele.Name}</td>
                            <td>{ele.Age}</td>
                            <td>
                                <button  onClick={()=>props.edit(ele.id)}>Edit</button>
                            <button>Delete</button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default CrudTable