const initialState = {
    items: [],
    item: {},
    message: "",
    loading: false,
    error: false,
};

export const users = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "UPDATE_GET_USERS":
            return {
                ...state,
                items: [...payload],
            };
        case "UPDATE_GET_USERS_BY_ID":
            return {
                ...state,
                item: payload,
            };
        case "UPDATE_GET_PAGINATE":
            return {
                ...state,
                items: [...payload],
            };
        case "UPDATE_GET_SORT":
            return {
                ...state,
                items: [...payload],
            };
        case "UPDATE_POST_USERS":
            return {
                ...state,
                items: [...state.items, payload],
            };
        case "UPDATE_PUT_USERS":
            return {
                ...state,
                items: state.items.map((user) => {
                    if (user.id === payload.id) return payload;

                    return user;
                }),
            };
        case "UPDATE_PATCH_USERS":
            return {
                ...state,
                items: state.items.map((user) => {
                    if (user.id === payload.id)
                        return {
                            ...user,
                            ...payload,
                        };

                    return user;
                }),
            };
        case "UPDATE_DELETE_USERS":
            return {
                ...state,
                items: state.items.filter((user) => user.id !== payload),
            };
        case "UPDATE_MESSAGE":
            return {
                ...state,
                message: payload,
            };
        default:
            return state;
    }
};
