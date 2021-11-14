
function Serves(){

 function handlPost(){
        axios.post('http://localhost:3001/house/post' , {title: addtitle , img: addimg , Location:addLocation ,
      price:addprice ,Details : addDetails })
        .then((res) => {
            console.log(res.data);
            setHouse(res.data);
        })}

    return(
        <div>
           
        </div>
    )
}




 