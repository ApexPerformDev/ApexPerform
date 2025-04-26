import {COLORS, FONT_SIZE} from "../../constants/theme.js"

export const styles = {
    gestor: {
        flex: 1,
        padding: 8,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: COLORS.gray2,
        marginTop: 3,
        marginBottom: 3,
        borderRadius: 10

    },

    name:{
        marginTop: 5,
        fontSize: FONT_SIZE.md,
    },

    cargo:{
        fontSize: FONT_SIZE.sm,
    },

    photo:{
        marginRight: 8,
        padding: 10,
        width: 50,
        height: 50,
        borderRadius: 25
    }


    

}