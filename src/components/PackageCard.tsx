import React from "react";
import { Button, Card, Image, Icon, Label } from "semantic-ui-react";
import { Package } from "@ftcg/core";
import moment from "moment";

interface PackageCardProps {
  package: Package;
}

export default class PackageCard extends React.Component<PackageCardProps> {
  render() {
    const pack = this.props.package;
    let labels = pack.tags.map(x => <Label>{x.name}</Label>)
    return (
      <Card>
        <Image
          src={"https://react.semantic-ui.com/images/avatar/large/daniel.jpg"}
        />
        <Card.Content>
          <Card.Header>{pack.title}</Card.Header>
          <Card.Meta>v{pack.version.major} • {pack.name.scope}/{pack.name.name} • {moment(pack.updated).fromNow()}</Card.Meta>
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
