import Swal from 'sweetalert2'
export default function ConfirmAlert({message}){
    return(Swal.fire({
        icon: "error",
        title: message,
    })
    ) 
}