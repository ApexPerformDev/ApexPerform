import {COLORS, FONT_SIZE} from "../../constants/theme.js"


export const styles = {
    container: {
        flex: 1,
        paddingTop: 12,
    },

    item:{
        borderWidth: 1,
        borderColor: COLORS.grey2,
        paddingLeft: 8,
        paddingTop: 15,
        paddingBottom: 15
    },

    title:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray2,
    },

    text:{
        fontSize: FONT_SIZE.md,
    }
}