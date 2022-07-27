import React from 'react';
import { render, fireEvent } from '../test-utils';

import { Button } from 'src/components';

describe('Button', () => {
  const buttonText = 'Test button';
  const buttonTestID = 'BUTTON_TEST_ID';

  const onPress = jest.fn();

  const MockButton = <Button testID={buttonTestID} text={buttonText} onPress={onPress} />;

  it('Should render a button, and matches with snapshot', () => {
    const { toJSON } = render(MockButton);

    expect(toJSON()).toMatchSnapshot();
  });

  it('Should call the onPress action from rendered button', () => {
    const { getByTestId } = render(MockButton);

    const button = getByTestId(buttonTestID);

    fireEvent.press(button);

    expect(onPress).toHaveBeenCalledTimes(1);
  });
});
