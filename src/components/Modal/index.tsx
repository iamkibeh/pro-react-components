import { ModalProps } from '@mui/material'
import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1800;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
  &.closed {
    opacity: 0;
    visibility: hidden;
  }
  &.open {
    opacity: 1;
    visibility: visible;
  }
`

const Dialog = styled.div`
  background-color: white;
  border-radius: 0.5rem;
  min-width: 300px;
  min-height: 50px;
  overflow: auto;
  display: block;
  margin: auto;
  margin-top: 18vh;
  transition: all 0.5s ease-in-out;
  z-index: 1801;
  &.closed {
    opacity: 0;
    visibility: hidden;
    margin-top: 0;
  }
  &.open {
    opacity: 1;
    visibility: visible;
    margin-top: 18vh;
  }
  &.small {
    width: 400px;
  }
  &.large {
    width: 800px;
  }
  &.medium {
    width: 600px;
  }
  &.full {
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
`
const Title = styled.div`
  padding: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Content = styled.div`
  padding: 1rem;
`
const Footer = styled.div`
  padding: 1rem;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: flex-end;
`
const CloseButton = styled.button`
  padding: 0.2rem;
  border-radius: 0.5rem;
  border: none;
  background-color: transparent;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 24px;
    height: 24px;
    fill: #000;
  }
  cursor: pointer;
  &:hover {
    background-color: #eee;
    svg {
      fill: #666;
    }
  }
`

const IconClose = () => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z' />
  </svg>
)

interface CustomModalProps extends ModalProps {
  open: boolean
  onClose: () => void
  size?: 'small' | 'medium' | 'large' | 'full'
  title?: string
  footer?: ReactNode
  showCloseIcon?: boolean
}

const CustomModal: React.FC<CustomModalProps> = ({
  open,
  onClose,
  children,
  size = 'medium',
  title,
  showCloseIcon = false,
}: CustomModalProps) => {
  return (
    <BackDrop className={open ? 'open' : 'closed'}>
      <Dialog className={`${size} ${open ? 'open' : 'closed'}`}>
        {title && (
          <Title>
            <span>{title}</span>
            {showCloseIcon ? (
              <CloseButton onClick={onClose}>
                <IconClose />
              </CloseButton>
            ) : null}
          </Title>
        )}
        <Content>{open ? children : null}</Content>
      </Dialog>
    </BackDrop>
  )
}

export default CustomModal
