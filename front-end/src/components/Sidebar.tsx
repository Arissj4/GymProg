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
  pageSize: number;
  handleNavigate: (route: string) => void;
}

const Sidebar = (props: Props) => {
  function sidebarElementCreator(id: string,logo: IconProp, title: string, route: string): JSX.Element {
    return (
      <li key={id}
      className='border-b border-section-border-gray p-4'
      onClick={() => props.handleNavigate(route)}
      >
        <FontAwesomeIcon icon={logo} />
        {props.pageSize > 520 ? title : ''}
      </li>
    )
  }

  const sidebarElementsList = [
    sidebarElementCreator('1', faHouse, 'Dashboard', '/'),
    sidebarElementCreator('2', faListOl, 'My Workouts', '/my-workouts'),
  ]


  return (
    <div id="sidebar" className='border-r border-section-border-gray py-6'>
      <ul id="sidebar-list">
        {/* <div>
          <div>
            {props.user.image ? (
              <img src='{props.userImage}'/>
            ) : (
              <FontAwesomeIcon icon={faCircleUser} />
            )}
          </div>

          <div>
            {props.userFullName ? props.userFullName : 'Default User'}
          </div>

          <div>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div> */}

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