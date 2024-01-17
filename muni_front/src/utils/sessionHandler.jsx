
const minutesExpiration = 30;

export const loginTest = (user) => {
    console.log("hola", user)
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

export const getItems = () => {

    if (isLogged()) {
        const items = {
            name: localStorage.getItem("name"),
            lastName: localStorage.getItem("lastName"),
            email: localStorage.getItem("email"),
            dni: localStorage.getItem("dni"),
            date: localStorage.getItem("date"),
            rol: localStorage.getItem("rol"),
            accessToken: localStorage.getItem("accessToken"),
            sessionExpired: localStorage.getItem("sessionExpired"),
        };
        return items;
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
