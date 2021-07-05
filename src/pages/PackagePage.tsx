import { Component } from 'react'
import { Container, Item, Statistic, Tab } from 'semantic-ui-react'
import PackageItem from '../components/PackageItem';
import { Package, PackageId } from "@ftcg/core";
import { withRouter } from "react-router";
import { Grid, Image, Segment } from 'semantic-ui-react'


import {
  RouteComponentProps
} from "react-router-dom";
import PackageCard from '../components/PackageCard';

function placeholderTab(name: string, icon: string) {
  return { menuItem: { key: name, icon: icon, content: name }, render: () => <Tab.Pane>{name}</Tab.Pane> };
}

const panes = [
  placeholderTab("about", "file text"),
  { menuItem: 'Preview', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
  placeholderTab("dependencies", "female"),
  placeholderTab("dependents", "child"),
  placeholderTab("assets", "tag"),
  placeholderTab("versions", "tags"),
  placeholderTab("files", "folder"),
]
const menu = { stackable: true };
const DEFAULT_STATE = {
  loading: true,
  package: new Package(new PackageId("fuck", "mylife"))
};

interface StaticContext {
  statusCode?: number;
}

interface Params {
  scope: string;
  name: string;
}

interface Props extends RouteComponentProps<Params, StaticContext, unknown> {

}

interface State {
  loading: boolean;
  package: Package;
}

class PackagePage extends Component<Props, State> {
  //state = DEFAULT_STATE;
  componentDidMount() {
    const id = new PackageId(this.props.match.params.scope, this.props.match.params.name);
    this.setState(DEFAULT_STATE);
    this.setState({
      package: new Package(id)
    });
  }

  render() {
    return (
      <div>
        <Grid stackable divided >
          <Grid.Column width={5} >
            <Item.Group>
              <PackageItem package={this.state.package} />
            </Item.Group>
          </Grid.Column>
          <Grid.Column width={11} > <Container>
            <Tab menu={menu} panes={panes} /></Container>
          </Grid.Column>
          <Grid.Column width={1}>
            <Statistic label='Downloads' value='5,550' />

          </Grid.Column>
        </Grid>


      </div>
    )
  }
}

export default withRouter(PackagePage);