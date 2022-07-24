import {ImYoutube, ImFacebook2, ImLinkedin} from "react-icons/im";
function Creator({meta}){
    return(
        <div className="creator flex-col justify-evenly content-evenly">
                    <div className="text-2xl">Telusko</div>
                    <div className="email">telusko@ineuron.com</div>
                    <div className="flex justify-between ">
                        <div className="yt"><ImYoutube/></div>
                        <div className="fb"><ImFacebook2/></div>
                        <div className="linkedin"><ImLinkedin/></div>
                    </div>
                    <button onClick={meta}
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
  Donate using Metamask
</button>
                </div>
    )
}
export default Creator;