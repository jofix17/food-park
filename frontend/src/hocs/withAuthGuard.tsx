import React, { ComponentType } from "react";
import AuthGuard from "../guards/AuthGuard";

interface WithAuthGuardProps {}
type OriginalComponentType<T> = ComponentType<T>;

const withAuthGuard =
  <P extends object>(Component: OriginalComponentType<P>) =>
  (props: P & WithAuthGuardProps) =>
    (
      <AuthGuard>
        <Component {...props} />
      </AuthGuard>
    );

export default withAuthGuard;
