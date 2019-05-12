import React from 'react';
import ReactPortfolio from 'react-portfolio';
import AboutMe from '../routes/about-me/about-me';
import withStyles from './app-styles';

const footer = [{
  children: 'Ace Quisido',
  href: 'https://quisido.com/',
  title: 'Ace Quisido\'s Portfolio',
}];

const routes = [
  {
    component: AboutMe,
    description: 'Portfolio of freelance artist Ace Quisido.',
    keywords: [ 'Ace Quisido', 'Ace Quisido\'s portfolio', 'freelance artist', 'freelance designer', 'freelance woodworker' ],
    path: '/',
    title: 'Ace Quisido'
  }
];

const social = {
  email: 'ace@quisido.com',
  linkedin: 'acequisido',
  // medium: 'Ace Quisido',
  // skype: 'ace-quisido',
  twitter: 'AceQuisido',
};

class App extends React.PureComponent {
  render() {
    return (
      <ReactPortfolio
        copyright={2018}
        footer={footer}
        hue={10 / 360}
        routes={routes}
        social={social}
        title="Ace Quisido"
      />
    );
  }
}

export default withStyles(App);
