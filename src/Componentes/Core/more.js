import React, { useState } from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function More() {
    const [dropdown, setDropdown] = useState(false);
    const abrirDropdown = () => {
        setDropdown(!dropdown)
    }
  return (
    <div>
        <Dropdown isOpen={dropdown} toggle={abrirDropdown}>
            <DropdownToggle>Drop ejemplo</DropdownToggle>

            <DropdownMenu>
                <DropdownItem>ffff</DropdownItem>
                <DropdownItem>ssss</DropdownItem>
                <DropdownItem>aaaa</DropdownItem>
                <DropdownItem>eeee</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </div>
  )
}

export default More