import React from "react";
import Button from "@material/react-button";
import "@material/react-button/dist/button.css";

const { __ } = wp.i18n;

const SaveButton = () => (
  <div id="eb-save-admin-options">
    <Button raised>{ __( 'Save' ) }</Button>
  </div>
);

export default SaveButton;
