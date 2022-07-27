import React, { FC } from 'react';
import { Column } from 'src/components';
import { ColumnProps } from 'src/components/Column';

export type RowProps = ColumnProps;

const RowComponent: FC<RowProps> = props => <Column flexDirection='row' {...props} />;

export default RowComponent;
