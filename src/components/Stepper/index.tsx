import {
  Box,
  Step,
  StepButton,
  Stepper,
  Typography,
} from '@mui/material'

import React from 'react'

interface Step {
  title: string
  subtitle?: string
  icon?: React.ReactNode
  content: React.ReactNode
}

export interface StepperProps {
  steps: Step[]
  expanded?: boolean
  activeStep: number
  orientation?: 'horizontal' | 'vertical'
}

function CustomStepper({ steps, activeStep = 0 }: StepperProps) {
  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep}>
        {steps.map(({ title, subtitle, icon }, index) => {
          return (
            <Step
              key={index}
              sx={{
                '& .MuiStepLabel-root .Mui-completed': {
                  color: 'primary.main', // circle color (COMPLETED)
                },
                '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                  {
                    color: 'grey.500', // Just text label (COMPLETED)
                  },
                '& .MuiStepLabel-root .Mui-active': {
                  color: 'primary.main', // circle color (ACTIVE)
                },
                '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                  {
                    color: 'common.white', // Just text label (ACTIVE)
                  },
                '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                  fill: 'common.white', // circle's number (ACTIVE)
                },
              }}
            >
              <StepButton icon={icon}>
                <Typography variant='h6'>{title}</Typography>
                {subtitle && (
                  <Typography variant='body2'>{subtitle}</Typography>
                )}
              </StepButton>
            </Step>
          )
        })}
      </Stepper>
      {steps[activeStep]?.content || 'No content'}
    </Box>
  )
}


export { CustomStepper}