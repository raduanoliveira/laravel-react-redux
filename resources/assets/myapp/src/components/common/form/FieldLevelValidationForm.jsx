export const required = value => (value || typeof value === 'number' ? undefined : 'Required')

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

export const maxLength15 = maxLength(15)

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined


export const minLength6 = minLength(6)

export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const month = value =>
  value && value > 12 ? 'Must be a month' : undefined

export const positive = value =>
  value && value < 0 ? 'Must be > 0' : undefined

const checkYear = (year) => {
  if (year < 1970 || year > 2050) {
     return false
  }
  return true

}

export const year = value =>
  value && !checkYear(value) ? 'Must be a year in range 1970 to 2050' : undefined

export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined

export const minValue13 = minValue(13)

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const tooYoung = value =>
  value && value < 13
    ? 'You do not meet the minimum age requirement!'
    : undefined


export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined


export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined

export const passwordsMustMatch = (value, allValues) =>
  value !== allValues.password_confirmation ?
    "Passwords don't match" :
    undefined

function check(imageFile, maxWeight) {
  const imageFileKb = imageFile.size / maxWeight;
  if (imageFileKb > maxWeight) {
    return true
  } else {
    return false
  }

}
export const validateImageWeight2M = imageFile =>
  imageFile && imageFile.size ?
    // Get image size in kilobytes
    check(imageFile, 2048) ?
      `Image size must be less or equal to 2 MB` : undefined
    : undefined
