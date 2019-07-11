import React from 'react'
import Link from 'gatsby-link';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import BlogPage from '../pages/blog';
import FiddlesPage from '../pages/fiddles';
import GitHubPage from '../pages/github';


const TabsComponent = () => (
  <div style={{ paddingTop: '10px' }}>
    <Tabs>
      <TabList>
     
        <Tab>Fiddles</Tab>
        <Tab>Github Projects</Tab>
        <Tab>BLog</Tab>
      </TabList>

     
      <TabPanel>
        <FiddlesPage />
      </TabPanel>
      <TabPanel>
        <GitHubPage/>
      </TabPanel>
      <TabPanel>
        <BlogPage />
      </TabPanel>
    </Tabs>
  </div>
)

export default TabsComponent;
