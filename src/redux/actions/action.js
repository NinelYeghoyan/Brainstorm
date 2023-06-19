import { REACT_APP_MAIN_URL } from "../../config";

import {
    updateDeleteUsers,
    updateGetPaginate,
    updateGetSort,
    updateGetUserById,
    updateGetUsers,
    updateMessage,
    updatePatchUsers,
    updatePostUsers,
    updatePutUsers,
} from "./types";

export const getUsers = () => async (dispatch) => {
    try {
        const response = await fetch(`${REACT_APP_MAIN_URL}/users`, {
            method: "GET",
        });
        const resultData = await response.json();

        dispatch(updateGetUsers(resultData));
    } catch (error) {
        console.log(error);
    }
};

export const getUserById = (id) => async (dispatch) => {
    try {
        const response = await fetch(`${REACT_APP_MAIN_URL}/users/${id}`, {
            method: "GET",
        });
        const resultData = await response.json();

        dispatch(updateGetUserById(resultData));
    } catch (error) {
        console.log(error);
    }
};

export const getPaginate = (page, limit) => async (dispatch) => {
    try {
        const response = await fetch(`${REACT_APP_MAIN_URL}/users?_page=${page}&_limit=${limit}`, {
            method: "GET",
        });
        const resultData = await response.json();

        dispatch(updateGetPaginate(resultData));
    } catch (error) {
        console.log(error);
    }
};

export const getSort = (sort, order) => async (dispatch) => {
    try {
        const response = await fetch(`${REACT_APP_MAIN_URL}/users?_sort=${sort}&_order=${order}`, {
            method: "GET",
        });
        const resultData = await response.json();

        dispatch(updateGetSort(resultData));
    } catch (error) {
        console.log(error);
    }
};

export const postUsers = (data) => async (dispatch) => {
    try {
        const response = await fetch(`${REACT_APP_MAIN_URL}/users`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const resultData = await response.json();

        dispatch(updatePostUsers(resultData));
    } catch (error) {
        console.log(error);
    }
};

export const putUsers = (data, id) => async (dispatch) => {
    try {
        const response = await fetch(`${REACT_APP_MAIN_URL}/users/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const resultData = await response.json();

        dispatch(updatePutUsers(resultData));
    } catch (error) {
        console.log(error);
    }
};

export const patchUsers = (data, id) => async (dispatch) => {
    try {
        const response = await fetch(`${REACT_APP_MAIN_URL}/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        const resultData = await response.json();

        dispatch(updatePatchUsers(resultData));
    } catch (error) {
        console.log(error);
    }
};

export const deleteUsers = (id) => async (dispatch) => {
    try {
        await fetch(`${REACT_APP_MAIN_URL}/users/${id}`, {
            method: "DELETE",
        });

        dispatch(updateDeleteUsers(id));
    } catch (error) {
        console.log(error);
    }
};

export const showUpdateMessage = (message) => (dispatch) => {
    dispatch(updateMessage(message));
};
