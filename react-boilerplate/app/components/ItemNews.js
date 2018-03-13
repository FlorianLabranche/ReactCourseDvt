import React from 'react'
import { Image, Item } from 'semantic-ui-react'

const ItemNews = props => (
  <Item.Group>
    <Item>
      <Item.Image size='tiny' src={props.img} />

      <Item.Content>
        <Item.Header as='a'>{props.title}</Item.Header>
        <Item.Extra>{props.desc}</Item.Extra>
      </Item.Content>
    </Item>

  </Item.Group>
)

export default ItemNews