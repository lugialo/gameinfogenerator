import React from 'react'
import { Link } from 'react-router'

type ButtonProps = {
  buttonLabel: string
  linkTo?: string
} & React.ComponentProps<'button'>

export function Button({ buttonLabel, linkTo, ...rest }: ButtonProps): React.JSX.Element {
  return (
    <div className="text-center">
      <Link to={linkTo || '#'}>
        <button {...rest}>{buttonLabel}</button>
      </Link>
    </div>
  )
}
