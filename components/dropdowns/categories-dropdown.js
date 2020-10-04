import { InputGroup, FormControl, Dropdown } from 'react-bootstrap'
import React, { useState } from 'react';
import utilStyles from '../../styles/utils.module.css'

export function CategoriesDropdown({ categories }) {
    const [value, setValue] = useState('');
    const handleSelect = (e) => {
        setValue(e)
    }
    const CustomToggle = React.forwardRef(({ onClick }, ref) => (
        <InputGroup size="sm">
            <FormControl
                autoFocus
                placeholder="เลือกประเภท..."
                ref={ref}
                onClick={(e) => {
                    e.preventDefault();
                    onClick(e);
                }}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
        </InputGroup>
    ));

    // forwardRef again here!
    // Dropdown needs access to the DOM of the Menu to measure it
    const CustomMenu = React.forwardRef(
        ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
            let filter = React.Children.toArray(children).filter(
                (child) =>
                    !value || !child.props.children || child.props.children.toLowerCase().startsWith(value),
            )
            return (
                filter.length > 0 && <div
                    ref={ref}
                    style={style}
                    className={className}
                    aria-labelledby={labeledBy}
                >
                    <ul className="list-unstyled">
                        {filter}
                    </ul>
                </div>
            );
        },
    );

    return (
        <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components"></Dropdown.Toggle>
            <Dropdown.Menu as={CustomMenu} className={`${utilStyles.width75} ${utilStyles.dropdown}`}>
                {categories.map(({ name_th }) => (
                    <Dropdown.Item eventKey={name_th}>{name_th}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    )
}