import * as React from 'react';

export type Position = None | Nav | Main | Side | Footer;

export interface None {
  kind: 'none';
}

export interface Nav {
  kind: 'nav';
}

export interface Main {
  kind: 'main';
}

export interface Side {
  kind: 'side';
}

export interface Footer {
  kind: 'footer';
}

const PositionContext = React.createContext<Position>({ kind: 'none' });

export default PositionContext;
