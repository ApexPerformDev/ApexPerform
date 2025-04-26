import {COLORS, FONT_SIZE} from "../../constants/theme.js"

export const styles = {
    container: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: "space-between",
        marginBottom: 30
    },

    theme:{
        todayTextColor: COLORS.purple,
        selectedDayBackgroundColor: COLORS.blue,
        selectedDayTextColor: COLORS.white,
        textDisabledColor: COLORS.gray2
    },
    textHour:{
        fontSize: FONT_SIZE.lg,
        fontWeight: "bold",
        marginTop: 30
    }
 
    

}