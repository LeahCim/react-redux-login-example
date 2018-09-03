import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

export const LoginButton = ({ disabled }) =>
    <Button
        type="submit"
        size="lg"
        block
        disabled={disabled}
    >
        Log in
    </Button>;

LoginButton.propTypes = {
    disabled: PropTypes.bool.isRequired
}