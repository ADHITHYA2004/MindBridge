const Loader = async () => {
    console.log(1);
    const data= await fetch('https://fakestoreapi.com/products')
    const dat_json = await data.json()
    console.log(dat_json)

    return dat_json
}


export default Loader