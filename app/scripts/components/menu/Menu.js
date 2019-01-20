import React from 'react';
import PropTypes from 'prop-types';
import { MenuSection } from 'containers/menu/MenuSection';

const Menu = ({ menu, sections }) => (
    <div className="app__menu">
        <div className="menu">
            {sections.map(section => (
                <MenuSection section={section} key={section.id} menu={menu} />
            ))}
        </div>
    </div>
);

Menu.propTypes = {
    menu: PropTypes.object.isRequired,
    sections: PropTypes.array.isRequired,
};

export { Menu };
