import React, { FC } from 'react'

export interface ComboBoxOptionProps {
  image?: string
  title: string
  description?: string
  isSelected?: boolean
  isActive?: boolean
}

export const ComboBoxOption: FC<ComboBoxOptionProps> =
  ({
    image,
    title,
    description,
    isSelected = false,
    isActive = false
  }: ComboBoxOptionProps) => {
    return (
      <div className="group w-full h-11 flex items-center cursor-pointer">
        <div className="min-w-0 flex items-center space-x-2">
            <div className="flex-shrink-0">
                <img src={image} alt="" className="w-10 h-10 rounded-full" />
            </div>

            <div className="flex-1 min-w-0">
                {title ? (
                    <p className="text-sm text-gray-900 truncate">
                        {title}
                    </p>
                ) : null}

                {description ? (
                    <p className="text-sm text-gray-500 truncate">
                        {description}
                    </p>
                ) : null}
            </div>
        </div>
      </div>
    )
  }
