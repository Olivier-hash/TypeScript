import React from 'react';

type Props = {
  name: string;
  age?: number; // optional prop
};

const Greeting: React.FC<Props> = ({ name, age }) => {
  return <h1>Hello, {name}! {age && `You're ${age} years old.`}</h1>;
};

export default Greeting;
