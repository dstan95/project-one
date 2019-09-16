export default {
    userErrorData: {
        custom: {
            fname: {
                required: "This field can not be empty",
                min: "The field may not be smaller than 2 characters",
                max: "The field may not be greater than 100 characters"
            },
            lname: {
                required: "This field can not be empty",
                min: "The field may not be smaller than 2 characters",
                max: "The field may not be greater than 100 characters"
            },
            username: {
                required: "This field can not be empty",
                min: "The field may not be smaller than 2 characters",
                max: "The field may not be greater than 100 characters"
            },
            email: {
                required: "This field can not be empty",
                email: "Email not valid"
            },
            password: {
                required: "This field ccan not be empty",
                min: "The field may not be smaller than 6 characters"
            }
        }
    },

    getUserErrorModel(){
        return this.userErrorData;
    }
}