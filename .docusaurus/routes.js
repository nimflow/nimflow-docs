
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/nimflow-docs/__docusaurus/debug',
  component: ComponentCreator('/nimflow-docs/__docusaurus/debug','bd7'),
  exact: true,
},
{
  path: '/nimflow-docs/__docusaurus/debug/config',
  component: ComponentCreator('/nimflow-docs/__docusaurus/debug/config','104'),
  exact: true,
},
{
  path: '/nimflow-docs/__docusaurus/debug/content',
  component: ComponentCreator('/nimflow-docs/__docusaurus/debug/content','ac6'),
  exact: true,
},
{
  path: '/nimflow-docs/__docusaurus/debug/globalData',
  component: ComponentCreator('/nimflow-docs/__docusaurus/debug/globalData','3d5'),
  exact: true,
},
{
  path: '/nimflow-docs/__docusaurus/debug/metadata',
  component: ComponentCreator('/nimflow-docs/__docusaurus/debug/metadata','37a'),
  exact: true,
},
{
  path: '/nimflow-docs/__docusaurus/debug/registry',
  component: ComponentCreator('/nimflow-docs/__docusaurus/debug/registry','c7c'),
  exact: true,
},
{
  path: '/nimflow-docs/__docusaurus/debug/routes',
  component: ComponentCreator('/nimflow-docs/__docusaurus/debug/routes','60e'),
  exact: true,
},
{
  path: '/nimflow-docs/markdown-page',
  component: ComponentCreator('/nimflow-docs/markdown-page','b21'),
  exact: true,
},
{
  path: '/nimflow-docs/',
  component: ComponentCreator('/nimflow-docs/','924'),
  
  routes: [
{
  path: '/nimflow-docs/',
  component: ComponentCreator('/nimflow-docs/','982'),
  exact: true,
},
{
  path: '/nimflow-docs/get-started/get-started-create-a-milestone',
  component: ComponentCreator('/nimflow-docs/get-started/get-started-create-a-milestone','452'),
  exact: true,
},
{
  path: '/nimflow-docs/get-started/get-started-create-a-new-context-type',
  component: ComponentCreator('/nimflow-docs/get-started/get-started-create-a-new-context-type','daf'),
  exact: true,
},
{
  path: '/nimflow-docs/get-started/get-started-create-a-task',
  component: ComponentCreator('/nimflow-docs/get-started/get-started-create-a-task','c92'),
  exact: true,
},
{
  path: '/nimflow-docs/get-started/get-started-create-an-action',
  component: ComponentCreator('/nimflow-docs/get-started/get-started-create-an-action','e8c'),
  exact: true,
},
{
  path: '/nimflow-docs/get-started/get-started-intro',
  component: ComponentCreator('/nimflow-docs/get-started/get-started-intro','be6'),
  exact: true,
},
{
  path: '/nimflow-docs/get-started/nimflow-portal',
  component: ComponentCreator('/nimflow-docs/get-started/nimflow-portal','4ac'),
  exact: true,
},
{
  path: '/nimflow-docs/get-started/nimflow-simulate',
  component: ComponentCreator('/nimflow-docs/get-started/nimflow-simulate','767'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
