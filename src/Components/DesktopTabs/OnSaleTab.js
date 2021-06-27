import React, {useState} from 'react';
import {
    Tab,
    Menu,
    MenuItem
} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme=>({
    onSaleTab:{
        ...theme.desktopTab
    }
}))

const OnSaleTab =()=>{
    const classes =useStyles()

    const [anchorEl,setAnchorEl] =useState(null)

    const handleMenu =(event)=>{
        if(anchorEl !== event.currentTarget){
            setAnchorEl(event.currentTarget)
        }
    }
    const handleCloseMenu =()=>{
        setAnchorEl(null)
    }

    const onSaleLinks =[
        {
            name:"Apartments",
            link:"/on-sale/apartments"
        },
        {
            name:"Offices",
            link:"/on-sale/offices"
        },
        {
            name:"Shops",
            link:"/on-sale/shops"
        },
        {
            name:"Land",
            link:"/on-sale/land"
        }
    ]

  return(
      <>
          <Tab
              label="On Sale"
              icon={<ExpandMoreIcon/>}
              component={Link}
              to ="/on-sale"
              className={classes.onSaleTab}
              aria-owns={anchorEl ? "onsale-menu" : undefined}
              aria-haspopup="true"
              onClick={event=>handleMenu(event)}
              onMouseOver={event=>handleMenu(event)}
          />

          <Menu
              id="onsale-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleCloseMenu}
              MenuListProps={{ onMouseLeave: handleCloseMenu }}
          >
              {onSaleLinks.map((item,index)=>(
                  <MenuItem
                      component={Link}
                      to={item.link}
                      key={index}
                  >
                      {item.name}
                  </MenuItem>
              ))}
          </Menu>
      </>
  )
}

export default OnSaleTab;