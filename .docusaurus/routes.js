
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/nimflow-docs/pt/markdown-page',
  component: ComponentCreator('/nimflow-docs/pt/markdown-page','580'),
  exact: true,
},
{
  path: '/nimflow-docs/pt/',
  component: ComponentCreator('/nimflow-docs/pt/','df9'),
  
  routes: [
{
  path: '/nimflow-docs/pt/',
  component: ComponentCreator('/nimflow-docs/pt/','a87'),
  exact: true,
},
{
  path: '/nimflow-docs/pt/get-started/get-started-create-a-milestone',
  component: ComponentCreator('/nimflow-docs/pt/get-started/get-started-create-a-milestone','2ad'),
  exact: true,
},
{
  path: '/nimflow-docs/pt/get-started/get-started-create-a-new-context-type',
  component: ComponentCreator('/nimflow-docs/pt/get-started/get-started-create-a-new-context-type','604'),
  exact: true,
},
{
  path: '/nimflow-docs/pt/get-started/get-started-create-a-task',
  component: ComponentCreator('/nimflow-docs/pt/get-started/get-started-create-a-task','344'),
  exact: true,
},
{
  path: '/nimflow-docs/pt/get-started/get-started-create-an-action',
  component: ComponentCreator('/nimflow-docs/pt/get-started/get-started-create-an-action','0c5'),
  exact: true,
},
{
  path: '/nimflow-docs/pt/get-started/get-started-intro',
  component: ComponentCreator('/nimflow-docs/pt/get-started/get-started-intro','46c'),
  exact: true,
},
{
  path: '/nimflow-docs/pt/get-started/nimflow-portal',
  component: ComponentCreator('/nimflow-docs/pt/get-started/nimflow-portal','ee2'),
  exact: true,
},
{
  path: '/nimflow-docs/pt/get-started/nimflow-simulate',
  component: ComponentCreator('/nimflow-docs/pt/get-started/nimflow-simulate','b08'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
