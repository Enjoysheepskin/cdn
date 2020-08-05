import React from "react";

const { __ } = wp.i18n;

const Header = () => (
  <header className="eb-admin-header">
    <h4>{ __( 'Blocks Controller' ) }</h4>
    <p>{ __( 'Disable the blocks you are not using to minimize resource loading' ) }</p>
  </header>
);

export default Header;
