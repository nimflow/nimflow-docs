
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/',
  component: ComponentCreator('/','cf8'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','328'),
  exact: true,
},
{
  path: '/license',
  component: ComponentCreator('/license','80f'),
  exact: true,
},
{
  path: '/tutorial/tutorial-create-action-type',
  component: ComponentCreator('/tutorial/tutorial-create-action-type','3d3'),
  exact: true,
},
{
  path: '/tutorial/tutorial-create-calculated-field',
  component: ComponentCreator('/tutorial/tutorial-create-calculated-field','b2f'),
  exact: true,
},
{
  path: '/tutorial/tutorial-create-context-type',
  component: ComponentCreator('/tutorial/tutorial-create-context-type','da8'),
  exact: true,
},
{
  path: '/tutorial/tutorial-create-task-type',
  component: ComponentCreator('/tutorial/tutorial-create-task-type','6d5'),
  exact: true,
},
{
  path: '/tutorial/tutorial-intro',
  component: ComponentCreator('/tutorial/tutorial-intro','344'),
  exact: true,
},
{
  path: '/tutorial/tutorial-set-requested-milestone',
  component: ComponentCreator('/tutorial/tutorial-set-requested-milestone','895'),
  exact: true,
},
{
  path: '/tutorial/tutorial-simulate-contexts',
  component: ComponentCreator('/tutorial/tutorial-simulate-contexts','761'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
