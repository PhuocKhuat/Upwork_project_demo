import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { I_Menu } from './i_menu'
import menu from './menu.json'
import { useEffect, useState } from 'react'
import { MoreVerticalIcon } from 'lucide-react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { blueGrey, red } from '@mui/material/colors'
import AddCircleIcon from '@mui/icons-material/AddCircle'

const Menu = () => {
  // console.log('🚀 ~ menu:', menu)
  const [list, setList] = useState<I_Menu[]>([])
  useEffect(() => {
    setList(menu)
  }, [])

  const renderMenu = () =>
    list.map((item) => (
      <Card sx={{ maxWidth: 345 }} key={item.id} className='mt-14 relative'>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVerticalIcon />
            </IconButton>
          }
          title={item.name}
          subheader='September 14, 2016'
        />
        <CardMedia component='img' alt='Food image' src={item.image} className='h-56' />
        <CardContent component='span' className='absolute right-0 bottom-0'>
          <Typography color={red[500]}>{item.price}</Typography>
        </CardContent>
        <CardContent>
          <Typography variant='body2' color={blueGrey[400]}>
            This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup
            of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label='add to favorites'>
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label='share'>
            <AddCircleIcon />
          </IconButton>
        </CardActions>
      </Card>
    ))
  return <div className='grid grid-cols-4 gap-4'>{renderMenu()}</div>
}

export default Menu
