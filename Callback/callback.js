const datas=[
    {name: 'Ayush Srivastava',Profession:'Software Developer'},
    {name: 'Ajay Kumar',Profession:'Software Developer'},
]

/**
 * Fetches data and updates the document body with a list of data names.
 * The function simulates an asynchronous operation using setTimeout.
 * It iterates over the `datas` array and creates a list item for each data name.
 * The list is then inserted into the document body after a delay of 5 seconds.
 */
function getDatas(){
    setTimeout(()=>{
        let output='';
        datas.forEach((data,index)=>{
            output+=`<li>${data.name}</li>`;
        });
        document.body.innerHTML=output;
    },5000);
}

function createData(data,callback){
    setTimeout(()=>{
        datas.push(data);
        callback();
    },2000);
}

createData({name: 'Aryan Jha',Profession:'Software Developer'},getDatas);// getDatas is a callback function