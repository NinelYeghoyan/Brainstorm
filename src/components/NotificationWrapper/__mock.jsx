import IconBell from "../../assets/icons/Bell";
import IconComments from "../../assets/icons/Comments";
import IconEnvelope from "../../assets/icons/Envelope";
import Notification from "../Notification";

export const mockData = [
    {
        id: 1,
        icon: <IconEnvelope />,
        notification: <Notification value={4} variant="warning" />,
    },

    {
        id: 2,
        icon: <IconBell />,
        notification: <Notification value={4} />,
    },
    {
        id: 3,
        icon: <IconComments />,
        notification: <Notification value={4} variant="secondary" />,
    },
];
