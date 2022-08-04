import React, { FC, useState } from 'react';

import { ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input, Column, Button, Text } from 'src/components';
import { LoginSchema } from 'src/utils';
import { useUser } from 'src/context';

interface FormLoginData {
  email: string;
  password: string;
}

const Login: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { login, user } = useUser();

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormLoginData>({
    reValidateMode: 'onSubmit',
    resolver: yupResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleLogin = async (credentials: any): Promise<void> => {
    try {
      setIsLoading(true);
      await login(credentials);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Column p='16px'>
      <KeyboardAwareScrollView
        enableOnAndroid={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          <Controller
            name='email'
            control={control}
            render={({ field: { onChange, value } }): JSX.Element => (
              <Input
                testID='input_email'
                mt='56px'
                label='E-mail'
                placeholder='E-mail'
                keyboardType='email-address'
                accessibilityLabel='input_email'
                value={value}
                error={errors.email?.message}
                onChangeText={onChange}
              />
            )}
          />

          <Controller
            name='password'
            control={control}
            render={({ field: { onChange, value } }): JSX.Element => (
              <Input
                testID='input_password'
                mt='32px'
                label='Senha'
                accessibilityLabel='input_password'
                placeholder='Senha'
                value={value}
                secureTextEntry
                error={errors.password?.message}
                onChangeText={onChange}
              />
            )}
          />

          <Button
            testID='button_sign'
            variant='primary'
            accessibilityLabel='text'
            mt={40}
            text='Entrar'
            loading={isLoading}
            onPress={handleSubmit(handleLogin)}
          />
        </ScrollView>
      </KeyboardAwareScrollView>
    </Column>
  );
};

export default Login;
