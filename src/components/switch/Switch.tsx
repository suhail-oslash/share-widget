import React, { FC } from 'react'
import { Switch } from '@headlessui/react'


export interface ToggleProps {
    isEnabled: boolean
    onChange: () => unknown
}

export const Toggle: FC<ToggleProps> =
  ({
    isEnabled,
    onChange
  }: ToggleProps) => {
    return (
        <Switch
            checked={isEnabled}
            onChange={onChange}
            className={`${isEnabled ? 'bg-gray-900' : 'bg-gray-200'}
            relative inline-flex h-[24px] w-[44px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
            <span className="sr-only">Switch</span>
            <span
                aria-hidden="true"
                className={`${isEnabled ? 'translate-x-5' : 'translate-x-0'}
                    pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
    
        </Switch>
    )
  }