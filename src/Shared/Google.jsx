import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import AuthContext from "../Context/AuthContext";
import toast from "react-hot-toast";
const Google = () => {
    const {signInGoogle} = useContext(AuthContext);
    const handleGoogle =()=>{
        signInGoogle()
        .then(()=>{
            toast.success("Successfully Google sign In!")
        })
        .catch(error =>{
            toast.error("Failed sign In")
        })
    }
    return (
        <div className="flex justify-center py-2">
            <button onClick={handleGoogle} className="btn bg-pink-300 text-center"><FaGoogle /> Google</button>
        </div>
    );
};

export default Google;