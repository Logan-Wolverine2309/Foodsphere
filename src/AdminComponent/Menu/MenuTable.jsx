import { Delete } from '@mui/icons-material';
import CreateIcon from '@mui/icons-material/Create';
import { Avatar, Box, Card, CardHeader, Chip, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const orders=[{id: 1}, {id: 2}, {id: 3}];
 

export default function MenuTable() {
  const dispatch = useDispatch(); 
  const jwt = localStorage.getItem("jwt");
  const { restaurant, ingredients, menu } = useSelector(store=>store)
 const navigate = useNavigate();
   
 useEffect(()=>{
         dispatch(getMenuItemsByRestaurantId({jwt,
          restaurantId:restaurant.usersRestaurant.id,
             vegetarian:false,
             nonveg:false,
             seasonal:false,
             foodCategory:"",
         }));
  }
  ,[])

  const handleDeleteFood=(foodId)=>{
    dispatch(deleteFoodAction({foodId,jwt}));
  }

  return (
    <Box>
      <Card className='mt-1' >
        <CardHeader 
        action={
            <IconButton onClick={handleAddMenuClick} aria-label="settings">
            <CreateIcon />
          </IconButton>
        } 
        title= { "Menu" }
        sx={{pt:5,alignItems:"center"}} />
         <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left"> Image </TableCell>
            <TableCell align="right"> Title </TableCell>
            <TableCell align="right"> Ingredients </TableCell>
            <TableCell align="right"> Price </TableCell>
            <TableCell align="right"> Avaibility </TableCell>
            <TableCell align="right"> Delete </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menu.menuItems.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&: td, &: th': { border: 8 } }}>

              <TableCell component="th" scope="row">
              <Avatar src={item.images[0]}></Avatar>
              </TableCell>
              <TableCell align="right">{item.name}</TableCell>
              <TableCell align="right">
                {item.ingredients.map((ingredient)=><Chip label={ingredient.name}></Chip>)}</TableCell>
              <TableCell align="right">₹{item.price}</TableCell>
              <TableCell align="right">{item.available?"in_stock":"out_of_stock"}</TableCell>
              <TableCell align="right">
                <IconButton color='primary' onClick={()=>handleDeleteFood(item.id)}>
                <Delete />
                </IconButton>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Card>
    </Box>
  );
}
