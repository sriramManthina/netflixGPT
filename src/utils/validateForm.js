export const validateFormData = (username, email, password, isSignInForm) => {
    const isUserNameValid = /^[a-zA-Z0-9_]{6,10}$/.test(username) || isSignInForm
    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isUserNameValid) return 'Username is not valid'
    if(!isEmailValid) return 'Email is not valid'
    if(!isPasswordValid) return 'Password is not valid'

    return null
}
