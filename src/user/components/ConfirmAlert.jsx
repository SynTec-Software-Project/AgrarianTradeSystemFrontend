import Swal from 'sweetalert2'
export default function ConfirmAlert(){
    return(Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User account has been created",
        showConfirmButton: false,
        timer: 2000
      })
    ) 
}