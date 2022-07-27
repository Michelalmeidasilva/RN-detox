import React, { FC, useMemo } from 'react';
import { TouchableOpacityProps, ActivityIndicator } from 'react-native';
import { variant, space, layout } from 'styled-system';
import styled from 'styled-components/native';
import { useTheme } from '@react-navigation/native';

import { ColumnProps, Text, Row } from 'src/components';

const PRIMARY = 'primary';
const SECONDARY = 'secondary';
const DISABLED = 'disabled';

type ButtonVariants = 'primary' | 'secondary' | 'disabled';

interface ButtonComponent extends ColumnProps, TouchableOpacityProps {
  text: string;
  icon?: string;
  variant?: ButtonVariants;
  disabled?: boolean;
  loading?: boolean;
}

interface StyledButton extends TouchableOpacityProps {
  variant?: ButtonVariants;
}

const Button: FC<ButtonComponent> = ({ text, variant, disabled, loading, ...props }) => {
  const { colors } = useTheme();

  const textColor = useMemo(() => {
    if (disabled) return colors.gray.n400;

    if (variant === PRIMARY) return colors.secondary;

    return colors.primary;
  }, [variant, disabled, colors]);

  return (
    <StyledButton
      variant={disabled ? 'disabled' : variant}
      disabled={disabled}
      my='5px'
      width='100%'
      {...props}
    >
      {loading && <ActivityIndicator size='small' color={textColor} />}

      {!loading && (
        <Row alignItems='center' justifyContent='center'>
          <Text variant='small' fontWeight={700} color={textColor}>
            {text}
          </Text>
        </Row>
      )}
    </StyledButton>
  );
};

const StyledButton: FC<StyledButton> = styled.TouchableOpacity(
  variant({
    variants: {
      [PRIMARY]: {
        backgroundColor: 'primary',
        borderColor: 'primary'
      },
      [SECONDARY]: {
        backgroundColor: 'transparent',
        borderColor: 'primary'
      },
      [DISABLED]: {
        backgroundColor: 'transparent',
        borderColor: 'gray.n400'
      }
    }
  }),
  `
    padding: 8px;
    min-height: 39px;
    border-width: 1px;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
  `,
  space,
  layout
);

Button.defaultProps = {
  variant: 'primary'
};

export default Button;
