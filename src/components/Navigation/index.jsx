import { useNavigate } from "react-router-dom";

import { routes } from "../../routes/routes";

import { mockData } from "./__mock";
import StyledNavigation from "./styled";

const Navigation = () => {
    const activeIndex = 2; // TODO: To make the hard code dynamic.
    const navigate = useNavigate();

    const handleRedirect = (id) => {
        if (id === activeIndex) {
            navigate(routes.home.path);
        }
    };

    return (
        <StyledNavigation className="BS-nav">
            {mockData.map((item) => (
                <div key={item.id} className="mv-2">
                    <div
                        role="button"
                        tabIndex={0}
                        onClick={() => handleRedirect(item.id)}
                        onKeyDown={() => handleRedirect(item.id)}
                        className={`${
                            item.id === activeIndex ? "active" : ""
                        } BS-nav--item flex items-center pl-32 cursor-pointer`}
                    >
                        {item.icon}
                        <span className="BS-nav--title ml-30">{item.name}</span>
                    </div>

                    {Array.isArray(item.subMenu) && !!item.subMenu.length && (
                        <ul className="BS-nav--sub pl-96">
                            {item.subMenu.map((subItem) => (
                                <li key={subItem.id} className="BS-nav--title flex items-center">
                                    <span className="cursor-pointer">{subItem.name}</span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </StyledNavigation>
    );
};

export default Navigation;
