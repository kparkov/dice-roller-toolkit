import * as React from 'react';

import { storiesOf } from '@storybook/react';

import DiceFactory from '../src/Library/DiceFactory';

import { RollPanel } from '../src/Components/RollPanel/RollPanel';

const factory = new DiceFactory('seed');
const pool = factory.createFromExpression('3d6 + 2');

storiesOf('RollPanel', module)
    .add('3d6 + 2', () => <RollPanel pool={pool} />);