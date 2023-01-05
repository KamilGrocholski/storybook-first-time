import React, { useState } from 'react'
import './SideNav.scss'

export interface SideNavProps {
    logo: Omit<LinkItemProps, 'isExpanded'>
    linkItems: Omit<LinkItemProps, 'isExpanded'>[]
}

export const SideNav: React.FC<SideNavProps> = ({
    logo,
    linkItems
}) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)

    const handleSetIsExpanded = (bool: boolean) => {
        setIsExpanded(bool)
    }

    const handleToggleIsExpanded = () => {
        setIsExpanded(prev => !prev)
    }

    return (
        <nav
            className={`side-nav ${isExpanded ? 'pr' : ''}`}
            aria-expanded={isExpanded}
        >
            {/* logo */}
            <LinkItem {...{ ...logo, isExpanded }} />

            {/* link items  */}
            <div className='link-items-container'>
                {linkItems.map(item => (
                    <LinkItem {...{ ...item, isExpanded }} />
                ))}
            </div>

            {/* isExpanded toggle button */}
            <button
                onClick={handleToggleIsExpanded}
                className='is-expanded-toggle-button'
            >
                {isExpanded ? '<<' : '>>'}
            </button>
        </nav>
    )
}

interface LinkItemProps {
    icon: React.ReactNode
    href: string
    label: string
    isExpanded: boolean
}

const LinkItem: React.FC<LinkItemProps> = ({
    href,
    label,
    icon,
    isExpanded
}) => {
    return (
        <div className='link-item'>
            <a href={href}>
                <div>{icon}</div>
                <div style={{ display: `${isExpanded ? 'block' : 'none'}` }}>{label}</div>
            </a>
        </div>
    )
}