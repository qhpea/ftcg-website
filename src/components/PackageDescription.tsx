import React from "react";
import { Descriptions, Tag } from 'antd';
import { Package } from "@ftcg/core";
import moment from "moment";

interface PackageItemProps {
  package: Package;
}

export default class PackageDescription extends React.Component<PackageItemProps> {
  render() {
    const pack = this.props.package;
    let labels = pack.tags.map(x => <Tag>{x.name}</Tag>)
    return (
      <Descriptions title={pack.title}>
        <Descriptions.Item label="Version">v{pack.version.major}</Descriptions.Item>
        <Descriptions.Item label="Name">{pack.name.scope}/{pack.name.name}</Descriptions.Item>
        <Descriptions.Item label="Updated">{moment(pack.updated).fromNow()}</Descriptions.Item>
        <Descriptions.Item label="Description">{pack.description}</Descriptions.Item>
        <Descriptions.Item label="Tags">{labels}</Descriptions.Item>
      </Descriptions>
    );
  }
}
