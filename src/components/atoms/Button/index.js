import Button from "./Button";

export const PrimaryButton = props => <Button {...props} type={props.type} className={"btn btn-primary "+props.className} />;
export const SecondaryButton = props => <Button {...props} className="btn btn-secondary btn-dark" />;
export const SuccessButton = props => <Button {...props} className="btn btn-primary btn-success" />;