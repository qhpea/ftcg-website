import React from "react";
import { Button, Item, Label } from "semantic-ui-react";
import { Package } from "@ftcg/core";
import moment from "moment";

interface PackageItemProps {
  package: Package;
}

export default class PackageItem extends React.Component<PackageItemProps> {
  render() {
    const pack = this.props.package;
    let labels = pack.tags.map(x => <Label>{x.name}</Label>)
    return (
      <Item>
        {/* <Item.Image
          size="medium"
          src={pack.thumbnail}
        /> */}

        <Item.Image
          src={"https://react.semantic-ui.com/images/avatar/large/daniel.jpg"}
          label={{ as: 'a', corner: 'left', icon: 'heart' }}
        />
        <Item.Content>

          <Item.Header>{pack.title}</Item.Header>
          <Item.Meta>v{pack.version.major} • {pack.name.scope}/{pack.name.name} • {moment(pack.updated).fromNow()}</Item.Meta>
          <Item.Description>
            {pack.description}
          </Item.Description>
          <p>33 Stars</p>
          <Item.Extra>
            {labels}
            {/* <Button floated='right'>Action</Button> */}
          </Item.Extra>
        </Item.Content>

      </Item>
    );
  }
}
