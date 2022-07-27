import React, { ForwardRefRenderFunction, useMemo, useState, forwardRef } from 'react';
import { TextInputProps, Platform, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { useTheme } from '@react-navigation/native';

import { Column, ColumnProps, Text } from 'src/components';

interface InputComponentProps extends Omit<TextInputProps, 'style'>, ColumnProps {
  label?: string;
  error?: string;
  callToAction?(): void;
}

interface StyledColumnProps extends ColumnProps {
  isFocused: boolean;
  error?: string;
  editable?: boolean;
  multiline?: boolean;
}

interface StyledInputProps extends TextInputProps {
  error?: string;
  type?: string;
}

export interface InputRef {
  focus(): void;
}

const InputComponent: ForwardRefRenderFunction<InputRef, InputComponentProps> = (
  {
    multiline,
    editable = true,
    secureTextEntry = false,
    label,
    error,
    placeholder,
    testID,
    value,
    autoCapitalize = 'none',
    callToAction,
    onChangeText,
    keyboardType,
    ...rest
  },
  ref
) => {
  const { colors } = useTheme();

  const getColor = useMemo(() => {
    if (error) {
      return colors.error;
    }

    return editable ? colors.gray.n500 : colors.gray.n200;
  }, [error, editable]);

  const [isFocused, setIsFocused] = useState(false);

  return (
    <Column width='100%' my='5px' {...rest}>
      {label && (
        <Text color={getColor} variant='small' mb='5px'>
          {label}
        </Text>
      )}

      <InputContainer error={error} isFocused={isFocused} editable={editable} multiline={multiline}>
        <StyledInput
          editable={editable}
          multiline={multiline}
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCapitalize={autoCapitalize}
          value={value}
          ref={ref}
          onFocus={() => setIsFocused(true)}
          onChangeText={onChangeText}
          onBlur={() => setIsFocused(false)}
          testID={testID}
        />
      </InputContainer>

      {error && (
        <Text color='error' variant='smaller' marginTop='5px'>
          {error}
        </Text>
      )}
    </Column>
  );
};

const InputContainer = styled.View<StyledColumnProps>`
  ${({ theme: { colors }, error, editable, isFocused, multiline, ...rest }) => {
    const disabledStyle = `
       background-color: ${colors.gray.n200}
     `;
    const focusedStyle = `
       border-color: ${colors.primary};
     `;

    const textAreaStyle = `
       height: 90px;
     `;

    const errorStyle = `
       border-color: ${colors.error};
     `;

    return `
       align-items: center;
       background-color: transparent;
       border: 1px solid ${colors.gray.n500};
       border-radius: 4px;
       flex-direction: row;
       height: 40px;

       ${error ? errorStyle : ''}
       ${isFocused ? focusedStyle : ''}
       ${!editable ? disabledStyle : ''}
       ${multiline ? textAreaStyle : ''}
     `;
  }}
`;

const StyledInput = styled.TextInput.attrs(({ theme: { colors }, multiline, ...rest }) => ({
  autoCapitalize: 'none',
  placeholderTextColor: colors.gray.n500,
  textAlignVertical: multiline && Platform.OS === 'android' && 'top',
  ...rest
}))<StyledInputProps>`
  flex: 1;
  height: 100%;
  padding: 8px 10px;
  font-size: 16px;
  font-weight: 500;
`;

export default forwardRef(InputComponent);
