const express=require('express')
const app=express()
const bodyparser=require("body-parser")
const Web3=require('web3')
const rpcURL="http://127.0.0.1:7545"
const web3=new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"))
const contractAddress="0xe30A3d7ABF80EdC58753cdDA18B9e6feed1e08b7"
const abi=[
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "date",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "status",
          "type": "string"
        }
      ],
      "name": "Call",
      "type": "event"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "name": "stud_record",
      "outputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "date",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "status",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_date",
          "type": "string"
        }
      ],
      "name": "rollCall",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_date",
          "type": "string"
        }
      ],
      "name": "getAttendance",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]

const contract=new web3.eth.Contract(abi,contractAddress)


// console.log(`contract:${contract.methods}`)


app.use(express.static('public'))
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())




app.get('/',(req,res)=>{
    res.render('index.html')
})

app.post('/doS',(req,res)=>{
    let name=req.body.name
    let date=req.body.date
    let status=req.body.status
    // console.log(`${name} ${date} ${status}`)
    // console.log(web3.eth.accounts)
    // console.log(contract.methods)
    contract.methods.rollCall(name,date).send({from:"0x1829EF922942198C25cC1013981033Cd70DFA8a1"}).then(
        (err,res)=>{
            if(err){
                console.log(err)
            }else{
                console.log(res)
            }
        }
    )
    res.redirect('/')
})





app.listen(3500,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log('server started')
    }
})

