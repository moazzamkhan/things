import React from 'react'
import List, { ListItem, ListItemIcon, ListItemSecondaryAction, ListSubheader } from 'material-ui/List'
import Input from 'material-ui/Input/Input'
import { createStyleSheet, withStyles } from 'material-ui/styles'
import InputLabel from 'material-ui/Input/InputLabel'
import FormControl from 'material-ui/Form/FormControl'
import FormHelperText from 'material-ui/Form/FormHelperText'
import PersonIcon from 'material-ui-icons/Person'
import IconButton from 'material-ui/IconButton'
import AddCircleIcon from 'material-ui-icons/AddCircle'
import data from '../data.json'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import MenuIcon from 'material-ui-icons/Menu'
import PropTypes from 'prop-types'

const styleSheet = createStyleSheet('ButtonAppBar', {
  root: {
    marginTop: 30,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
})

const ContactComponent = ({ classes }) => {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}>
      <AppBar position='static' color='default'>
        <Toolbar>
          <IconButton color='contrast' aria-label='Menu'>
            <MenuIcon />
          </IconButton>
          <Typography type='title' color='inherit' className={classes.flex}>Contact Information</Typography>
          <Button color='contrast'>Login</Button>
        </Toolbar>
      </AppBar>
      <List disablePadding subheader={<ListSubheader>Profile</ListSubheader>}>
        {data.map((d, i) => {
          return (<ListItem key={i}>
            <FormControl error={d.error}>
              <InputLabel htmlFor={d.property} style={{ textTransform: 'capitalize' }}>
                {d.label}
              </InputLabel>
              <Input id={d.property} value={d.value} style={{ width: 600 }}
                     disabled={d.disabled} />
              <FormHelperText>{d.description}</FormHelperText>
            </FormControl>
            {d.multiple && (<ListItemSecondaryAction>
              <IconButton aria-label='Add'>
                <AddCircleIcon />
              </IconButton>
            </ListItemSecondaryAction>)}
          </ListItem>)
        })}
      </List>
    </div>
  )
}

ContactComponent.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(ContactComponent)
