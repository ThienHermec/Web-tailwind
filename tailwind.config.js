/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./public/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                kay_primary: "#22201F",
                kay_secondary: "#373739",
                kay_third: "#D6D8D9",
                kay_fourth: "#828282",
            },
        },
    },
    plugins: [],
};
