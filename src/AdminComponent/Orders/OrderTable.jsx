import { Avatar, AvatarGroup, Box, Button, Card, CardHeader, Chip, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchRestaurantsOrder } from '../../component/State/RestaurantOrder/Action';

const orderStatus=[
  {label:"Pending",value:"PENDING"},
  {label:"Complete",value:"COMPLETED"},
  {label:"Out For Delivery",value:"OUR_FOR_DELIVERY"},
  {label:"Delivered",value:"DELVERED"}
];


export default function OrderTable() {
  
  const dispatch = useDispatch(); 
  const jwt = localStorage.getItem("jwt");
  const { restaurant,restauranOrder,ingredients, order } = useSelector(store=>store)
  const navigate = useNavigate()

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


   useEffect(()=>{
    dispatch(fetchRestaurantsOrder({
      jwt,
      restaurant:restaurant.userRestaurant?.id,
    }))
  },[])

  const handleUpdateOrder=(orderId,orderStatus)=>{
   dispatch(UpdateOrderStatus({orderId,orderStatus,jwt}))
    handleClose();
  }
  return (
    <Box>
      <Card className='mt-1'>
        <CardHeader
          title={"All Orders"}
          sx={{pt:2,alignItems:"center"}}
        />
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> id </TableCell>
            <TableCell align="right"> Image </TableCell>
            <TableCell align="right"> Customer </TableCell>
            <TableCell align="right"> Price </TableCell>
            <TableCell align="right"> Name </TableCell>
            <TableCell align="right"> Ingredients </TableCell>
            <TableCell align="right"> Status </TableCell>
            <TableCell align="right"> Update </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurant.Orders.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&: td, &: th': { border: 8 } }}
            >
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="right">
                <AvatarGroup>
                  {item.items.map((orderItem)=>(
                    <Avatar src={orderItem.food?.images[0]}/>
          ))}
                </AvatarGroup>
              </TableCell>
              <TableCell align="right">{item.customer?.fullName}</TableCell>
              <TableCell align="right">&{item.totalAmmount}</TableCell>
              <TableCell align="right">
                {item.items.map((orderItem)=><p>{orderItem.food?.name}</p>)}</TableCell>
              <TableCell align="right">{item.items.map((orderItem)=>
              <div>
                {orderItem.ingredients.map((ingredients)=><Chip label={ingredients}/>)}
              </div>
              )}
              </TableCell>
              <TableCell align="right">{item.orderStatus}</TableCell>
              <TableCell align='right'>
              <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Update
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {orderStatus.map((status)=>(
          <MenuItem onClick={()=>handleUpdateOrder(item.id,status.value)}>{status.label}</MenuItem>
        ))}
       
      </Menu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Card>
    </Box>
  )
}
