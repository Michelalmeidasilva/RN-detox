import { FC } from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import {
  space,
  layout,
  color,
  flexbox,
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  PositionProps,
  FlexboxProps
} from 'styled-system';

type StyledProps = SpaceProps &
  LayoutProps &
  ColorProps &
  BorderProps &
  PositionProps &
  FlexboxProps &
  ViewProps;

export interface ColumnProps extends StyledProps {
  as?: unknown;
}

const ColumnComponent: FC<ColumnProps> = styled.View<ColumnProps>(flexbox, space, layout, color);

export default ColumnComponent;
