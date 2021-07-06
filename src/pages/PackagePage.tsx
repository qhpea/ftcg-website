import { Component } from 'react'
import PackageDescription from '../components/PackageDescription';
import { Package, PackageId } from "@ftcg/core";
import { withRouter } from "react-router";
import { Grid, Image, Segment } from 'semantic-ui-react'
import { PageHeader, Tabs, Button, Statistic, Descriptions } from 'antd';
import {
  FolderViewOutlined as FolderIcon,
  UploadOutlined as UploadIcon
} from '@ant-design/icons'

import {
  RouteComponentProps
} from "react-router-dom";
import PackageCard from '../components/PackageCard';
const { TabPane } = Tabs;

// function placeholderTab(name: string, icon: string) {
//   return { menuItem: { key: name, icon: icon, content: name }, render: () => <Tab.Pane>{name}</Tab.Pane> };
// }

// const panes = [
//   placeholderTab("about", "file text"),
//   { menuItem: 'Preview', render: () => <Tab.Pane>Tab 1 Content</Tab.Pane> },
//   placeholderTab("dependencies", "female"),
//   placeholderTab("dependents", "child"),
//   placeholderTab("assets", "tag"),
//   placeholderTab("versions", "tags"),
//   placeholderTab("files", "folder"),
// ]
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

const Content = ({ children, extra }: any) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
);

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
    const footer = (<Tabs defaultActiveKey="rule">
      <TabPane tab="Details" key="details" />
      <TabPane tab="Rule" key="rule" />
    </Tabs>);
    return (
      <PageHeader
        className="site-page-header-responsive"
        onBack={() => window.history.back()}
        title="Title"
        subTitle="This is a subtitle"
        extra={[
          <Button key="3">Operation</Button>,
          <Button key="2">Operation</Button>,
          <Button key="1" type="primary">
            Primary
          </Button>,
        ]}
        footer={
          <Tabs defaultActiveKey="1">
            <TabPane tab="Details" key="1" />
            <TabPane tab="Rule" key="2" />
            <TabPane tab="Rule" key="3" />
            <TabPane tab="Rule" key="4" />
            <TabPane tab="Rule" key="5" />
            <TabPane tab="Rule" key="6" />
            <TabPane tab="Rule" key="7" />

          </Tabs>
        }
      >
          {/* <PackageDescription package={this.state.package}/> */}
      </PageHeader>
    )
  }
}

export default withRouter(PackagePage);