const url = String(
    window.location.origin.replace(
        /:\d+$/gi,
        window.location.protocol === "https:" ? ":8443" : ":8080"
    ) +
    window.location.pathname.substring(
        0,
        window.location.pathname.indexOf("/", 2) > -1
            ? window.location.pathname.indexOf("/", 2)
            : window.location.pathname.length
    )
);

export default {
    fetchCategories() {
        console.log("Fetching " + `${url}/api/categories`);
        return fetch(`${url}/api/categories`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .catch(reason => {
                console.log("Error fetching category data", reason);
            });
    },
    fetchSelectedCategoryBooks(selectedCategoryName) {
        console.log("Fetching " + `${url}/api/categories/name/`+selectedCategoryName+'/books');
        return fetch(`${url}/api/categories/name/`+selectedCategoryName+'/books')
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .catch(reason => {
                console.log("Error fetching category data", reason);
            });
    },
    fetchHomeCategories() {
        console.log("Fetching " + `${url}/api/categoriesTopThree`);
        return fetch(`${url}/api/categoriesTopThree`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Network response was not ok.");
            })
            .catch(reason => {
                console.log("Error fetching category data", reason);
            });
    },
    placeOrder(order) {
        console.log("Posting to " + `${url}/api/orders`);
        return fetch(`${url}/api/orders`, {
            method: "POST",
            body: JSON.stringify(order),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Network response was not ok.");
        });
    }

};