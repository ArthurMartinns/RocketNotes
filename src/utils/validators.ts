export const validateEmail = (email: string) => {
	return email.trim() !== '' && /\S+@\S+\.\S+/.test(email)
}
export const validatePassword = (password: string) => {
	return (
		password.trim() !== '' &&
		password.length >= 8 &&
		/^(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/.test(password)
	)
}
