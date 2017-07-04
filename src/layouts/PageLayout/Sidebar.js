import React from 'react'
import PropTypes from 'prop-types'
import { createStyleSheet, withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import List, { ListItem, ListItemIcon, ListItemText, ListSubheader } from 'material-ui/List'
import InboxIcon from 'material-ui-icons/Inbox'

const styleSheet = createStyleSheet('DockedSidebar', {
  list: {
    width: 200,
    flex: 'initial',
  },
  listFull: {
    width: 'auto',
    flex: 'initial',
  },
})

const list = [{ items: ['Home'] }, {
  group: 'Personal',
  items: ['Profile', 'Contact', 'Social', 'Events']
}]

const Sidebar = ({ classes }, { router }) => {
  const sideList = (<div>
    {list.map((g, i) => (
      <List key={i} className={classes.list} disablePadding subheader={<ListSubheader>{g.group}</ListSubheader>}>
        <div>{g.items.map((category, j) => (
          <ListItem key={j} button>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary={category} onClick={() => router.push('/' + category.toLowerCase())} />
          </ListItem>
        ))}</div>
      </List>))}
  </div>)
  return (<Drawer open docked>{sideList}</Drawer>)
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
}

Sidebar.contextTypes = {
  router: PropTypes.object
}

export default withStyles(styleSheet)(Sidebar)
