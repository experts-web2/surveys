import React from "react";
import { Spinner } from "react-bootstrap";
import { User, Admin } from "../pages";

interface IProps {
  user?: any;
  role: "admin" | "user" | "null"
}

export const BaseLayout: React.FC<IProps> = ({ user, role }: IProps) => {
  switch (role) {
    case "null":
      return <Spinner animation="border" />;
    case "admin":
      return <Admin />;
    case "user":
      return <User />;
    default:
      return null
  }
};
