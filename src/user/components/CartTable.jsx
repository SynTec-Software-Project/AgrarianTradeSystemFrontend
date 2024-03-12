import { Card, IconButton, Typography,Tooltip } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
import { MdOutlineClose } from "react-icons/md";
const TABLE_HEAD = ["Item", "Price", "Qty", "Sub Total", ""];   
const BuyerId = 1;// buyer id is harcoded
 
export function CartTable() {
  const[cartItems, setCartItems] = useState([]);
  const  PopupHandler = (id) =>{
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#44bd32",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!"
    }).then((result) => {
      if (result.isConfirmed) {
        if(id != 0){
          deleteConfirmHandler(id);
          console.log(id);
        }
        console.log("deleted");
        Swal.fire({
          title: "Removed!",
          text: "Your item has been removed.",
          icon: "success"
        });
      }else{
        console.log("Canceled " + id);
      }
    });
  }
  
  function deleteConfirmHandler(itemId){
    axios.delete(`https://localhost:44376/api/ShoppingCart/delete-cart-item?buyerId=${BuyerId}&cartItemId=${itemId}`)
    .then((response)=>{         
        setCartItems(response.data);
    })
  }
  useEffect(() => {
    axios.get(`https://localhost:44376/api/ShoppingCart/items?customerId=${BuyerId}`)
    .then((response) => {
      setCartItems(response.data);
    });
  }, [cartItems]);
  
  return (
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-200 bg-white p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item ,index) => {
             const key =  item.cartItemId|| index;
          
            const classes = "p-4 border-b border-blue-gray-50 ";
 
            return (
              <tr key={key}>
                <td className={classes}>
                    <div className="flex items-center">
                        <img
                       src={"https://syntecblobstorage.blob.core.windows.net/products/" + item.productImageUrl} alt={item.productName}
                        className="w-36 h-24 rounded-sm object-cover"
                        />
                        <div className="ml-4">
                        <Typography
                            color="blue-gray"
                            className="font-medium text-lg" 
                        >
                            {item.productName}
                        </Typography>
                        </div>
                    </div>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.price.toLocaleString()+'.00'}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {item.quantity}
                  </Typography>
                </td>
                <td className={classes}>
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {(item.quantity * item.price).toLocaleString()+'.00'}
                  </Typography>
                </td>
                <td className={classes}>
                <Tooltip content="Remove">
                        <IconButton variant="text" color='red'
                        onClick={() => PopupHandler(item.cartItemId)}
                        >
                          <MdOutlineClose className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
    </Card>
  );
}