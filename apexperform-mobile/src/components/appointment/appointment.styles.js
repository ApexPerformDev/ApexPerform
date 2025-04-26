import {COLORS, FONT_SIZE} from "../../constants/theme.js"

export const styles = {
    appointment: {
        flex: 1,
        padding: 12,
        borderWidth: 1,
        borderColor: COLORS.gray2,
        borderRadius: 6,
        marginBottom: 12
    },

    gestor:{
        fontSize: FONT_SIZE.md,
        marginBottom: 5,
    },



    icon:{
        width: 25,
        height: 25,
        marginRight: 5,
    },

  

    bookingDate:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray2,
        marginTop: 3
    },

    bookingHour:{
        fontSize: FONT_SIZE.sm,
        color: COLORS.gray2,
        marginTop: 3
    },

    containerBooking:{
        flex: 1
    },

    booking:{
        flex: 1,
        flexDirection: "row"
    },

    containerButton:{
        marginTop: 5
    },

    container:{
        flexDirection: "row"
    },


}