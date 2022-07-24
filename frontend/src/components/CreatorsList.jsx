import Creator from "./Creator";
import  {useState} from "react";
import {ethers} from "ethers";
import {JSONABI} from '../abi/Creator'
import TxList  from "../transactionlist";
import {logout} from "../firebase"

function CreatorList(){
    const transactions = useState([])
    const[transaction,setTransaction] = useState({
      'from' : '',
      'to' : '',
      'amount' : 0
    })
    const [data,setData] = useState({
        address : '',
        Balance : null
    })
    const [provider,SetProvider] = useState('') //change to polygon address later
    const [signer, setSigner] = useState('') // change to provider.getSigner()



     // Button handler button for handling a
  // request event for metamask
  const btnhandler = () => {
  
    // Asking if metamask is already present or not
    if (window.ethereum) {
  
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };
   // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
  
    // Requesting balance method
    window.ethereum
      .request({ 
        method: "eth_getBalance", 
        params: [address, "latest"] 
      })
      .then((balance) => {
        // Setting balance
        setData({
          Balance: ethers.utils.formatEther(balance),
        });
      });
  };
    // Function for getting handling all events
    const accountChangeHandler = (account) => {
        // Setting an address data
        setData({
          address: account,
        });
      
        // Setting a balance
        getbalance(account);
      };

      // Send 1 ether to an ens name.
// const tx = signer.sendTransaction({
//     to: "ricmoo.firefly.eth",
//     value: ethers.utils.parseEther("1.0")
// });
const startPayment = async ({  setTxs, ether, addr }) => {
  addr = '8aC0D74aabb088b648DFffDd3799421Bf1439231';
  try {
    if (!window.ethereum)
      throw new Error("No crypto wallet found. Please install it.");

    await window.ethereum.send("eth_requestAccounts");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    let amount = 1;
    ethers.utils.getAddress(addr);
    const tx = await signer.sendTransaction({
      to: addr,
      value: ethers.utils.parseEther(amount.toString())
    });
    // console.log({ ether, addr });
    console.log("tx", tx);
    setTransaction({
      'from' : tx.from,
      'to' : tx.to,
      'amount' : 0
    })
    transactions.push(transaction);
    console.log(transactions);
  } catch (err) {
    console.log(err.message);
  }
};
 const showTransaction = ()=> {
  console.log(transaction);
 }

// const contract  = new ethers.Contract(0x8aC0D74aabb088b648DFffDd3799421Bf1439231,window.ethereumJSONABI, )
    return(
        <div className="container-md grid place-items-center h-screen">
            <div className="logout">
            <button onClick={logout} className="bg-red-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                LogOut
            </button>
            </div>
                <div className="text-5xl">Creators</div>
                <ul className="grid gap-10">
                    <li><button onClick={btnhandler}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Connect Metamask to donate
</button></li>
                    <li><Creator meta={startPayment}/></li>
                    <li><Creator/></li>
                </ul>
                <div>
                <button onClick={showTransaction}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  View recent donations
</button>
<div className="record">
</div>
                </div>
                </div>
    )
}

export default CreatorList;
