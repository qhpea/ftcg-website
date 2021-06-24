import React, { Component } from 'react'
import { Item, Tab } from 'semantic-ui-react'
import PackageItem from '../components/PackageItem';
import { Package, PackageId } from "@ftcg/core/dist/classes";

function placeholderTab(name: string, icon: string) {
  return { menuItem: { key: name, icon: icon, content: name }, render: () => <Tab.Pane>{name}</Tab.Pane> };
}

const panes = [
  { menuItem: 'Preview', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  placeholderTab("dependencies", "female"),
  placeholderTab("dependents", "child"),
  placeholderTab("about", "file text"),
  placeholderTab("assets", "tag"),
  placeholderTab("versions", "tags"),
  placeholderTab("files", "folder"),
]

const DEFAULT_STATE = { package: new Package(new PackageId("fuck", "mylife")) };

export default class PackagePage extends Component {
  state = DEFAULT_STATE;
  render() {
    return (
      <div>
        <Item.Group>        <PackageItem package={this.state.package}></PackageItem>
        </Item.Group>
        <Tab panes={panes} />
      </div>
    )
  }
}
