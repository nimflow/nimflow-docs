
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/es/__docusaurus/debug',
  component: ComponentCreator('/es/__docusaurus/debug','022'),
  exact: true,
},
{
  path: '/es/__docusaurus/debug/config',
  component: ComponentCreator('/es/__docusaurus/debug/config','2cf'),
  exact: true,
},
{
  path: '/es/__docusaurus/debug/content',
  component: ComponentCreator('/es/__docusaurus/debug/content','445'),
  exact: true,
},
{
  path: '/es/__docusaurus/debug/globalData',
  component: ComponentCreator('/es/__docusaurus/debug/globalData','382'),
  exact: true,
},
{
  path: '/es/__docusaurus/debug/metadata',
  component: ComponentCreator('/es/__docusaurus/debug/metadata','5c6'),
  exact: true,
},
{
  path: '/es/__docusaurus/debug/registry',
  component: ComponentCreator('/es/__docusaurus/debug/registry','6fb'),
  exact: true,
},
{
  path: '/es/__docusaurus/debug/routes',
  component: ComponentCreator('/es/__docusaurus/debug/routes','35f'),
  exact: true,
},
{
  path: '/es/markdown-page',
  component: ComponentCreator('/es/markdown-page','fbe'),
  exact: true,
},
{
  path: '/es/old_index',
  component: ComponentCreator('/es/old_index','005'),
  exact: true,
},
{
  path: '/es/',
  component: ComponentCreator('/es/','432'),
  
  routes: [
{
  path: '/es/',
  component: ComponentCreator('/es/','eaa'),
  exact: true,
},
{
  path: '/es/get-started/get-started-create-a-milestone',
  component: ComponentCreator('/es/get-started/get-started-create-a-milestone','cf6'),
  exact: true,
},
{
  path: '/es/get-started/get-started-create-a-new-context-type',
  component: ComponentCreator('/es/get-started/get-started-create-a-new-context-type','c14'),
  exact: true,
},
{
  path: '/es/get-started/get-started-create-a-task',
  component: ComponentCreator('/es/get-started/get-started-create-a-task','8c3'),
  exact: true,
},
{
  path: '/es/get-started/get-started-create-an-action',
  component: ComponentCreator('/es/get-started/get-started-create-an-action','a35'),
  exact: true,
},
{
  path: '/es/get-started/get-started-intro',
  component: ComponentCreator('/es/get-started/get-started-intro','275'),
  exact: true,
},
{
  path: '/es/get-started/nimflow-portal',
  component: ComponentCreator('/es/get-started/nimflow-portal','8d6'),
  exact: true,
},
{
  path: '/es/get-started/nimflow-simulate',
  component: ComponentCreator('/es/get-started/nimflow-simulate','dfe'),
  exact: true,
},
{
  path: '/es/tutorial-basics/congratulations',
  component: ComponentCreator('/es/tutorial-basics/congratulations','c3c'),
  exact: true,
},
{
  path: '/es/tutorial-basics/create-a-blog-post',
  component: ComponentCreator('/es/tutorial-basics/create-a-blog-post','9a1'),
  exact: true,
},
{
  path: '/es/tutorial-basics/create-a-document',
  component: ComponentCreator('/es/tutorial-basics/create-a-document','fe0'),
  exact: true,
},
{
  path: '/es/tutorial-basics/create-a-page',
  component: ComponentCreator('/es/tutorial-basics/create-a-page','66d'),
  exact: true,
},
{
  path: '/es/tutorial-basics/deploy-your-site',
  component: ComponentCreator('/es/tutorial-basics/deploy-your-site','afd'),
  exact: true,
},
{
  path: '/es/tutorial-basics/markdown-features',
  component: ComponentCreator('/es/tutorial-basics/markdown-features','a12'),
  exact: true,
},
{
  path: '/es/tutorial-extras/manage-docs-versions',
  component: ComponentCreator('/es/tutorial-extras/manage-docs-versions','aa7'),
  exact: true,
},
{
  path: '/es/tutorial-extras/translate-your-site',
  component: ComponentCreator('/es/tutorial-extras/translate-your-site','ee7'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
