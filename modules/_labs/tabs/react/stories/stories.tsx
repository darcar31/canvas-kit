/// <reference path="../../../../../typings.d.ts" />
/** @jsx jsx */
import {jsx} from '@emotion/core';
import withReadme from 'storybook-readme/with-readme';
import {spacing} from '@workday/canvas-kit-react-core';
import {withSnapshotsEnabled} from '../../../../../utils/storybook';
import {Tabs, TabList, Tab, TabPanel, TabPanels} from '../index';
import README from '../README.md';

export default withSnapshotsEnabled({
  title: 'Labs|Tabs/React',
  component: Tabs,
  decorators: [withReadme(README)],
});

export const Default = () => (
  <Tabs>
    <TabList>
      <Tab>Tab</Tab>
      <Tab>Tab Medium</Tab>
      <Tab>Tab Really Long</Tab>
      <Tab>Tab Really Really Long</Tab>
      <Tab>Tab</Tab>
    </TabList>
    <TabPanels>
      <TabPanel css={{padding: spacing.l}}>Hi this is tab content</TabPanel>
      <TabPanel css={{padding: spacing.l}}>Hi this is medium tab content</TabPanel>
      <TabPanel css={{padding: spacing.l}}>Hi this is really long tab content</TabPanel>
      <TabPanel css={{padding: spacing.l}}>Hi this is really really long tab content</TabPanel>
      <TabPanel css={{padding: spacing.l}}>Hi this is tab content</TabPanel>
    </TabPanels>
  </Tabs>
);