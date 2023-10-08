import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CallAlert = (type, message) => {
    console.log(type)

    switch (type) {
        case 0:
            return (

                toast.error(message, {
                    position: "top-center",
                    autoClose: 900,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                    toastId: "",

                })
            );
        case 1:
            return (

                toast.success(message, {
                    position: "top-center",
                    autoClose: 900,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: false,
                    progress: undefined,
                    theme: "dark",
                    toastId: "",

                })
            );

        default:
            break;

    }





}

export default CallAlert;