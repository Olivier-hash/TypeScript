import React from 'react';

type Props = { title: string };
type State = { count: number };

class Counter extends React.Component<Props, State> {
  state = { count: 0 };

  render() {
    return <div>{this.props.title}: {this.state.count}</div>;
  }
}
