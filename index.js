let i=2;
   let showvalue=true
    let cIndex=0;
    let ed_val;

const result_row =document.getElementById("result-row")

const stockdetail = [
    {
        id:0,
       Productcode : 101,
       Productname : "liquid",
       Productqty : 10,
       Productdate : "2022-05-23"
    },
    {
        id:1,
        Productcode : 102,
        Productname : "soap",
        Productqty : 20,
        Productdate : "2023-05-23"
    }]

    function showAllProducts(){     
        result_row.innerHTML=""
        if(showvalue){
            stockdetail.map(product=> showProduct(product))
        }
    }
    showAllProducts()

    function showTask(){
        showvalue=true
        showAllProducts()
        }
         

    function hideTask(){
        showvalue=false
        showAllProducts()
        
    }
        

    function showProduct(product){     
        let output=`
            <div class="row" style="display:flex; ">
                <div class="col" style="width:10%;">${product.Productcode}</div>
                <div class="col" style="width:10%;">${product.Productname}</div>
                <div class="col" style="width:10%;">${product.Productqty}</div>            
                <div class="col" style="width:10%;">${product.Productdate}</div>
                <div class="col" style="width:10%;">
                    <button onclick="editProduct(${product.id})">Edit</button>
                    <button onclick="delProduct(${product.id})">Delete</button>
                </div>
            </div>`;
        result_row.innerHTML+=output
    }


var pcode = document.getElementById('productcode')
var pname = document.getElementById('productname')
var pqty = document.getElementById('productqty')
var pdate = document.getElementById('productdate')

    function addProduct(){              
        var tempval={
            id:i,
            Productcode:pcode.value,
            Productname:pname.value,
            Productqty:pqty.value,
            Productdate:pdate.value
        }
        i=i+1
        stockdetail.push(tempval)
        showAllProducts()
        }
       

function editProduct(id_val) {
    pcode.value=stockdetail[id_val].Productcode;
    pname.value=stockdetail[id_val].Productname;
    pqty.value=stockdetail[id_val].Productqty;
    pdate.value=stockdetail[id_val].Productdate;
    update_val=id_val
}

function updateProduct(){

    stockdetail[update_val].Productcode=pcode.value;
    stockdetail[update_val].Productname=pname.value;
    stockdetail[update_val].Productqty=pqty.value;
    stockdetail[update_val].Productdate=pdate.value;
    showAllProducts()
}

function delProduct(id_val){
    stockdetail.splice(id_val,1)
    showAllProducts()

}







