import React, { FC, ReactNode } from 'react'

export interface ButtonProps {
    colorScheme?: 'primary' | 'secondary'
    children: ReactNode
    onClick: () => unknown
    size?: 'small' | 'medium' 
}

export const Button: FC<ButtonProps> =
  ({
    colorScheme = 'primary',
    children,
    onClick,
    size ='medium'
  }: ButtonProps) => {
    return (
        <button
            type='button'
            className={`inline-flex items-center text-sm font-medium rounded ring-0 appearance-none select-none whitespace-nowrap align-middle transition-colors focus:outline-none
              ${colorScheme === 'primary' ? ' bg-gray-900 hover:bg-gray-800 text-white' :''}
              ${colorScheme === 'secondary' ? ' bg-transparent hover:bg-gray-200 text-gray-900' :''}
              ${size === 'small' ? ' px-3 py-1.5' : ''}
              ${size === 'medium' ? ' px-4 py-2' : ''}
            `}
            onClick={onClick}
        >   
            {children}
        </button>
    )
  }