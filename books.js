document.addEventListener('DOMContentLoaded', function() {


    load_page()

});

//Shoe Dog, QmXvXFihf7mbkcQzFGS6WDUhGAcDik1TK2vpqUmDDpW5FF, QmTxTYJcuULjCu7yWxYU3482uxkeShwr9Edj5nFStBhnti

function load_page() {

       

                // Mint the number of NFTs specified in the form
                document.querySelector("#form1").addEventListener('submit', function(e) {
                    e.preventDefault();

                        mint();

                });
            
        


    ////////////////////
    // CONTRACT CALL
    ///////////////////
    async function mint() {

        const contract = create_contract();

        console.log(await contract.methods._readBook("test1").call())
        var all_books = await contract.methods._readAll().call();

        for (let x=0; x<all_books.length; x++) {
            console.log(all_books[x][0], all_books[x][1], all_books[x][2])
            create_book_layout(all_books[x][0], all_books[x][1], all_books[x][2])
        }


        ////////////////////
        // Extra Calls/Sends 
        ////////////////////


        //let result;

        //console.log(web3.eth.getBlock("latest", (err, result) => {console.log(result)}))
        
        //await contract.methods.setBaseURI("Poo/turds/$h*t").send( {from: account })
        //result = await contract.methods.baseURI().call()
        //console.log(`This is the baseURI: ${result}`)
        
        //await contract.methods.reserve(6).send( {from: account})

        //await contract.methods.flipSaleState().send( {from: account })

        //result = await contract.methods.tokenURI(7).call()
        //console.log(`Token URI: ${result}`)

        //result = await contract.methods.totalSupply().call()
        //console.log(`Total Supply: ${result}`)
    }
/*////////////////////
/// Uploading Files
/////////////////////*/

/*document.querySelector("#upload-submit").addEventListener("click", async () => {
    var file = document.querySelector("#customFile").files;
    console.log(file[0]);

    // Get the accounts
    //const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    //const account = accounts[0]
    //console.log(account)
    //Initiate web3 instance
    let web3 = new Web3(Web3.givenProvider)
    await web3.eth.getAccounts(console.log);

    //Connect to the contract
    const abi = [{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"TitleToImg","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"TitleToText","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_title","type":"string"},{"internalType":"string","name":"_img","type":"string"},{"internalType":"string","name":"_text","type":"string"}],"name":"_createBook","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_readAll","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"text","type":"string"}],"internalType":"struct bookStorage.Book[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_title","type":"string"}],"name":"_readBook","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"books","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"text","type":"string"}],"stateMutability":"view","type":"function"}]
    const address = '0x037f2E0BC25d7EAce138c18D42152Ca169edfCC2'//0x8B4BC70F423fBB9c93324B9a0c4AA1FA1a50A2d8'//'//
    const contract = new web3.eth.Contract(abi, address)


    const account2 = "0xad2782699f71e5CeE57693695c61d062d77a74e2";
    console.log(account2)



    await contract.methods._createBook("Shoe Dog2", "QmXvXFihf7mbkcQzFGS6WDUhGAcDik1TK2vpqUmDDpW5FF", "QmTxTYJcuULjCu7yWxYU3482uxkeShwr9Edj5nFStBhnti").send({from: account2});
});*/




}

/*///////////////////
/// Creating the Contract
//////////////////////*/
function create_contract() {
    //Initiate web3 instance
    web3 = new Web3("https://rinkeby.infura.io/v3/7ec28e58b24e4996a5d49b71e781a3b4");//http://localhost:7545");//
    //Connect to the contract
    const abi = [{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"TitleToImg","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"","type":"string"}],"name":"TitleToText","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_title","type":"string"},{"internalType":"string","name":"_img","type":"string"},{"internalType":"string","name":"_text","type":"string"}],"name":"_createBook","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_readAll","outputs":[{"components":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"text","type":"string"}],"internalType":"struct bookStorage.Book[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_title","type":"string"}],"name":"_readBook","outputs":[{"internalType":"string","name":"","type":"string"},{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"books","outputs":[{"internalType":"string","name":"title","type":"string"},{"internalType":"string","name":"img","type":"string"},{"internalType":"string","name":"text","type":"string"}],"stateMutability":"view","type":"function"}]
    const address = '0x037f2E0BC25d7EAce138c18D42152Ca169edfCC2'//0x8B4BC70F423fBB9c93324B9a0c4AA1FA1a50A2d8'//'//
    const contract = new web3.eth.Contract(abi, address)
    return contract;
}




/*///////////////////
/// Creating the Book Element
///////////////////*/

function create_book_layout(book_title, book_img, book_text) {
    //Create the row
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    //Create the col
    var col = document.createElement("div");
    col.setAttribute("class", "col-lg-2 col-md-3 col-sm-4 col-xs-5 col-5 mx-sm-0 mx-auto");
    //Create the thumbnail
    var thumbnail= document.createElement("div");
    thumbnail.setAttribute("class", "thumbnail text-center");
    thumbnail.setAttribute("style", "border:none;");
    //Create the img_group
    var img_group = document.createElement("div");
    img_group.setAttribute("class", "img-group");
    //Create the link1
    var link1 = document.createElement("a");
    link1.setAttribute("href", `https://ipfs.io/ipfs/${book_text}`);
    //Create the img
    var img = document.createElement("img");
    img.setAttribute("class", "img-fluid");
    img.setAttribute("src", `https://ipfs.io/ipfs/${book_img}`);
    //Create the title for book
    var title = document.createElement("div");
    title.setAttribute("style", "height:60px;overflow: hidden; text-overflow: ellipsis;");
    //Create the h5
    var h5 = document.createElement("h5");
    //Create the link2
    var link2 = document.createElement('a');
    link2.setAttribute("class","links");
    link2.setAttribute("href", `https://ipfs.io/ipfs/${book_text}`);
    link2.innerHTML = book_title;

    //Appending everything in the right order
    document.querySelector("#begin").appendChild(row);
    row.appendChild(col);
    col.appendChild(thumbnail);
    thumbnail.appendChild(img_group);
    img_group.appendChild(link1);
    link1.appendChild(img);
    
    thumbnail.appendChild(title);
    title.appendChild(h5);
    h5.appendChild(link2);
 }