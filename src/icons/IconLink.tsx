import React from 'react'

export interface IconProps {
  className: string
}

export const IconLink = ({
  className = ''
}: IconProps): React.ReactElement => {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.21895 6.78105C8.17755 5.73965 6.48911 5.73965 5.44772 6.78105L2.78105 9.44772C1.73965 10.4891 1.73965 12.1776 2.78105 13.219C3.82245 14.2603 5.51089 14.2603 6.55228 13.219L7.28666 12.4846M6.78105 9.21895C7.82245 10.2603 9.51089 10.2604 10.5523 9.21895L13.219 6.55228C14.2603 5.51089 14.2603 3.82245 13.219 2.78105C12.1776 1.73965 10.4891 1.73965 9.44772 2.78105L8.71464 3.51412" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}
