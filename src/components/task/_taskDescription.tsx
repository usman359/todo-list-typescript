import { Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import PropTypes from 'prop-types';
import { ITaskDescription } from './interfaces/ITaskDescription';

export const TaskDescription: FC<ITaskDescription> = (
  props,
): ReactElement => {
  const { description = 'Dummy Text' } = props;
  return (
    <Box>
      <Typography>{description}</Typography>
    </Box>
  );
};

TaskDescription.propTypes = {
  description: PropTypes.string,
};
