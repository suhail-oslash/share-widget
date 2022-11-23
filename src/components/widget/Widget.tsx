import { Popover, Transition } from '@headlessui/react'
import React, { FC, Fragment, useState } from 'react'
import { IconGlobe } from '../../icons/IconGlobe'
import { IconLink } from '../../icons/IconLink'
import { IconQuestionMarkCircle } from '../../icons/IconQuestionMarkCircle'
import { IconShare } from '../../icons/IconShare'
import { Button } from '../button/Button'
// import { ComboBox } from '../combobox/ComboBox'
import { ComboBoxOption } from '../combobox/comboboxoption/ComboBoxOption'
import { Toggle } from '../switch/Switch'

export interface WidgetProps {
    test?: string
}

export const Widget: FC<WidgetProps> =
  ({
    test
  }: WidgetProps) => {
    const [enabledToggle, setEnabledToggle] = useState(false)

    return (
        <Popover className="relative">
            {({ open }) => (
            <>
                <Popover.Button
                    as='div'
                    className={`${open ? '' : 'text-opacity-90'} focus:outline-none`}
                >
                    
                    <Button
                        onClick={() => null}
                    >
                        Share
                        <IconShare className="w-4 h-4 fill-white ml-2" />
                    </Button>
                </Popover.Button>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                >
                    <Popover.Panel className="bg-white w-[32rem] absolute left-0 mt-1 border border-gray-200 rounded-lg shadow-lg overflow-hidden z-10">
                        {/* Panel header starts here */}
                        <div className="flex items-center pt-5 pr-3 pb-5 pl-5 border-b border-b-gray-200">
                            <div className="flex items-center space-x-4">
                                <IconGlobe className="w-8 h-8 fill-gray-500" />
                                <div>
                                    <p className="text-gray-900 text-base">Share to web</p>
                                    <p className="text-gray-500 text-sm">Publish and share link with anyone</p>
                                </div>
                            </div>

                            <div className="leading-none ml-auto">
                                <Toggle  
                                    isEnabled={enabledToggle}
                                    onChange={() => setEnabledToggle(!enabledToggle)}
                                />
                            </div>
                        </div>
                        {/* Panel header ends here */}

                        {/* Panel body starts here */}
                        <div className="p-4">
                            {/* <ComboBox /> */}

                            <ul className="space-y-4">
                                <li>
                                    <ComboBoxOption 
                                        image='https://getoslash.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F127aa8dc-b79e-4467-a538-f6a79d012e47%2FLogo.png?table=block&id=2ae2f92b-c90b-4616-894f-7192ab06e37a&spaceId=f110d0ea-cbc6-42da-8af9-8e2fe5fe9c6a&width=250&userId=&cache=v2'
                                        title='Everyone at OSlash'
                                        description='25 workspace members'
                                    />
                                </li>
                                <li>
                                    <ComboBoxOption 
                                        image='https://getoslash.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F127aa8dc-b79e-4467-a538-f6a79d012e47%2FLogo.png?table=block&id=2ae2f92b-c90b-4616-894f-7192ab06e37a&spaceId=f110d0ea-cbc6-42da-8af9-8e2fe5fe9c6a&width=250&userId=&cache=v2'
                                        title='Tom cook'
                                        description='tom@oslash.com'
                                    />
                                </li>
                            </ul>
                        </div>
                        {/* Panel body starts here */}

                        {/* Panel footer starts here */}
                        <div className="bg-gray-50 flex items-center px-3 py-2 border-t border-t-gray-200">
                            <a 
                                href='/'
                                className="flex items-center text-sm text-gray-500"
                            >
                                <IconQuestionMarkCircle className="w-4 h-4 text-gray-500 mr-2" />
                                learn about sharing
                            </a>

                            <div className="ml-auto">
                                <Button
                                    colorScheme='secondary'
                                    size='small'
                                    onClick={() => null}
                                >
                                    <IconLink className="w-4 h-4 text-gray-900 mr-2" />
                                    Copy link
                                </Button>
                            </div>
                        </div>
                        {/* Panel footer starts here */}
                    </Popover.Panel>
                </Transition>
            </>
            )}
        </Popover>
    )
  }