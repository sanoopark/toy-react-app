import { Component } from 'core/Component';

interface AppProps {
  content: string;
}

export default class App extends Component<HTMLElement, AppProps> {
  setInitialState() {
    this.state = { content: 'App' };
  }

  render() {
    return `${this.state.content}`;
  }

  componentDidMount() {
    console.log('Mounted');
  }
}
