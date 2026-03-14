import React, { type JSX } from 'react'
import '../style/Sidebar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCircleUser } from '@fortawesome/free-regular-svg-icons'
import { faBars, faListOl } from "@fortawesome/free-solid-svg-icons"
import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { useNavigate } from 'react-router'
import type { User } from '../model/User'


type Props = {
  user: User;
  handleNavigate: (route: string) => void;
}

const Sidebar = (props: Props) => {
  function sidebarElementCreator(logo: IconProp, title: string, route: string): JSX.Element {
    return (
      <li onClick={() => props.handleNavigate(route)}>
        <FontAwesomeIcon icon={logo} />
        {title}
      </li>
    )
  }

  const sidebarElementsList = [
    sidebarElementCreator(faHouse, 'Home', '/'),
    sidebarElementCreator(faListOl, 'My Programs', '/user-exercise-programs'),
  ]

  
  return (
    <div id="sidebar" className='border-r border-section-border-gray p-3'>
      <ul id="sidebar-list">
        <div>
          <div>
            {props.user.image ? (
              <img src='{props.userImage}'/>
            ) : (
              <FontAwesomeIcon icon={faCircleUser} />
            )}
          </div>

          {/* <div>
            {props.userFullName ? props.userFullName : 'Default User'}
          </div> */}

          <div>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>

        <div>
          {sidebarElementsList}
        </div>

        <div>

        </div>
      </ul>
    </div>
  )
}

export default Sidebar