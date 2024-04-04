fetch("https://randomuser.me/api/?results=5").then((data)=>{
   //console.log(tabledata)
   return data.json(); //converted to object
}).then((objectData) => {
    let tableData = " ";
    objectData.results.map((values)=>{
        tableData += `<tr>
                        <td>${values.name.first}</td>
                        <td>${values.location.city}</td>
                       </tr>`;
    })
    document.getElementById("table_body").innerHTML= tableData
}).catch((err)=>{
    console.log(err)
})
