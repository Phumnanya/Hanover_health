import { extendTheme } from "@chakra-ui/react";

const MyTheme = extendTheme({
    colors: {
        brand: {
            vividpink: "#FF347D",
            vividazure: "#39BEE5",
        },
    },
    fonts: {
        heading: `'Verdana', sans-serif`,
        body: `'Verdana', sans-serif`,
    },
});

export default MyTheme;