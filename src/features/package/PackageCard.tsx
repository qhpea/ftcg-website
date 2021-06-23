import React from "react";
import { Button, Card, Image, Icon, a } from "semantic-ui-react";
import { Package } from "@ftcg/core";
interface PackageCardProps{
    package: Package;
}

export default class PackageCard extends React.Component<PackageCardProps> {
    render() {
        const pack = this.props.package;
      return (
        <Card>
          <Image
            src={pack.thumbnail || "https://react.semantic-ui.com/images/avatar/large/daniel.jpg"}
            wrapped
            ui={false}
          />
          <Card.Content>
            <Card.Header>{pack.title}</Card.Header>
            <Card.Meta>{pack.thumbnail}</Card.Meta>
            <Card.Description>
            {pack.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href="#help">
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
      );
    }
  }
  