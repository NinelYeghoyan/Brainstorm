export const updateGetUsers = (users) => ({
    type: "UPDATE_GET_USERS",
    payload: users,
});

export const updateGetUserById = (users) => ({
    type: "UPDATE_GET_USERS_BY_ID",
    payload: users,
});

export const updateGetPaginate = (users) => ({
    type: "UPDATE_GET_PAGINATE",
    payload: users,
});

export const updateGetSort = (users) => ({
    type: "UPDATE_GET_SORT",
    payload: users,
});

export const updatePostUsers = (users) => ({
    type: "UPDATE_POST_USERS",
    payload: users,
});

export const updatePutUsers = (users) => ({
    type: "UPDATE_PUT_USERS",
    payload: users,
});

export const updatePatchUsers = (users) => ({
    type: "UPDATE_PATCH_USERS",
    payload: users,
});

export const updateDeleteUsers = (users) => ({
    type: "UPDATE_DELETE_USERS",
    payload: users,
});

export const updateMessage = (message) => ({
    type: "UPDATE_MESSAGE",
    payload: message,
});
