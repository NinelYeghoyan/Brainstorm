import { StyledCheckbox } from "./styled";

const Checkbox = ({ className, ...rest }) => (
    <StyledCheckbox className="BS-checkbox">
        <input type="checkbox" className={`${className}`} {...rest} />
    </StyledCheckbox>
);

export default Checkbox;
