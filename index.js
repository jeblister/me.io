
var data = {};

data.name = 'Mohamed Jebli';
data.nick = 'jeblister';
data.username = 'jeblister';
data.title = 'Web developer';
data.byline = 'Developer, writer and speaker.Based in Rabat, Morocco.';
data.homepage = '//uacode7.com';
data.avatar_png = '//avatars3.githubusercontent.com/u/10877412?v=3&s=140';

data.social_networks = [
  { name: 'Twitter', link: '//twitter.com/jebli_7' },
  { name: 'Github', link: '//github.com/jeblister' },
  { name: 'Google+', link: '//plus.google.com/u/0/110403600390494494996' }
];

data.projects = {
  featured: [
    {
      name: 'react-ua',
      link: '//eact-ua.github.io',
      description: 'A set of React components for Universal Application with Lightning-Fast Modular CSS with No Side Effects.',
      color: 'white',
      logo: '',
      backgroundColor: 'black'
    },
    {
      name: 'universal static render',
      link: '//github.com/jeblister/universal-static-render',
      description: 'A JavaScript project for static websites that runs on both the client & server. Using webpack to render a website statically, and react-router to switch between pages dynamically all the code use ES6.',
      logo: '',
      color: 'black',
      backgroundColor: 'white',
    }
  ],

  other: [
    { name: 'UNIVERSAL-MANIFESTO-for-web-app', link: '//github.com/jeblister/UNIVERSAL-MANIFESTO-for-web-app', description: 'My rules for Universal (Isomorphic) application.' },
    //{ name: 'Writing', link: '//jxnblk.com/writing', description: 'Articles and Blog Posts' },
    { name: 'Reading List', link: '', description: 'Recommended Reading' },
    { name: 'Ashley', link: '//jxnblk.com/Ashley', description: 'Readable Tumblr Theme' }
  ]

};

data.writing = {
  posts: [
    {
      title: 'Creating Static, Universal Websites with React',
      subheading: 'A JavaScript project for static websites that runs on both the client & server.',
      link: '',
      lead: 'Using webpack to render a website statically, and react-router to switch between pages dynamically all the code use ES6.'
    }
  ]
}

module.exports = data;
