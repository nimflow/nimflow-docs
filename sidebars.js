/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    {
      type: 'category',
      labels: 'Welcome',
      items: ['welcome']
    },
    {
      type: 'category',
      labels: 'Get Started',
      items: [
        {type: 'autogenerated', dirName: './tutorial'},
      ]
    },
    {
      type: 'category',
      labels: 'License',
      items: ['nimflow-softwa-license']
    }
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};
