import React from "react";
import { Button, Card, Image, Icon, Label} from "semantic-ui-react";
import { Package } from "@ftcg/core";

interface PackageCardProps{
    package: Package;
}

export default class PackageCard extends React.Component<PackageCardProps> {
    render() {
        const pack = this.props.package;
      let labels = pack.tags.map(x=> <Label>{x.name}</Label>)
      return (
        <Card>
          <Image
            src={pack.thumbnail}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{pack.title}</Card.Header>
            <Card.Meta>v{pack.version} • {pack.name.scope}/{pack.name.name} • {pack.updated}</Card.Meta>
            <Card.Description>
            {pack.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            {labels}
          </Card.Content>
        </Card>
      );
    }
  }
  