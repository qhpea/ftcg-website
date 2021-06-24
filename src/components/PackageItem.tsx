import React from "react";
import { Button, Item, Label} from "semantic-ui-react";
import { Package } from "@ftcg/core";
import moment from "moment";

interface PackageItemProps{
    package: Package;
}

export default class PackageItem extends React.Component<PackageItemProps> {
    render() {
        const pack = this.props.package;
      let labels = pack.tags.map(x=> <Label>{x.name}</Label>)
      return (
        <Item>
          <Item.Image
            src={pack.thumbnail || "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"}
          />
          <Item.Content>
            <Item.Header>{pack.title}</Item.Header>
            <Item.Meta>v{pack.version} • {pack.name.scope}/{pack.name.name} • {moment(pack.updated).fromNow()}</Item.Meta>
            <Item.Description>
            {pack.description}
            </Item.Description>
          </Item.Content>
          <Item.Extra>
            {labels}
            <Button floated='right'>Action</Button>
          </Item.Extra>
        </Item>
      );
    }
  }
  