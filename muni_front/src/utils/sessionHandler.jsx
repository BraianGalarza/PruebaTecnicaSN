
const minutesExpiration = 30;

export const loginTest = (user) => {
    localStorage.setItem("name", JSON.stringify(user.name));
    localStorage.setItem("lastName", JSON.stringify(user.lastName));
    localStorage.setItem("email", JSON.stringify(user.email));
    localStorage.setItem("dni", JSON.stringify(user.dni));
    localStorage.setItem("date", JSON.stringify(user.date));
    localStorage.setItem("rol", JSON.stringify(user.rol));
    localStorage.setItem("accessToken", user.accessToken);
    localStorage.setItem("sessionExpired", setExpirationTime(minutesExpiration));
};


export const logout = () => {

    localStorage.clear();

};


export const isLogged = () => {
    const email = localStorage.getItem("email");

    if (email) {
        if (
            email === null ||
            email === undefined ||
            isExpired() ||
            email === "null" ||
            email === ""
        ) {
            return false;
        } else {
            localStorage.removeItem("sessionExpired");
            localStorage.setItem(
                "sessionExpired",
                setExpirationTime(minutesExpiration)
            );

            return true;
        }
    } else {

        return false;
    }
};
export const isAdmin = () => {
    const rol = JSON.parse(localStorage.getItem("rol"))
    console.log(rol,"rol")
    if (rol) {
        if (
            rol == "admin"
        ) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

export const getItems = () => {

    if (isLogged()) {
        const items = {
            name: JSON.parse(localStorage.getItem("name")),
            lastName: JSON.parse(localStorage.getItem("lastName")),
            email: JSON.parse(localStorage.getItem("email")),
            dni: JSON.parse(localStorage.getItem("dni")),
            date: JSON.parse(localStorage.getItem("date")),
            rol: JSON.parse(localStorage.getItem("rol")),
            accessToken: localStorage.getItem("accessToken"),
            sessionExpired: localStorage.getItem("sessionExpired"),
        };
        return items;
    }

    return null;
};
export const getRol = () => {

    if (isLogged()) {
        const rol = JSON.parse(localStorage.getItem("rol"))

        return rol;
    }

    return null;
};
export const getDni = () => {

    if (isLogged()) {
        const dni = JSON.parse(localStorage.getItem("dni"))
        return dni;
    }

    return null;
};

const setExpirationTime = (minutes) => {
    return new Date().getTime() + 1000 * 60 * minutes;
};

const isExpired = () => {
    const tiempo = localStorage.getItem("sessionExpired");
    return tiempo < new Date().getTime() ? true : false;
};
