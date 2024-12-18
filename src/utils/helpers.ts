export const handleSubmit = (
  event: React.FormEvent<HTMLFormElement>,
  searchValue: any,
  router: any,
) => {
  event.preventDefault()
  if (searchValue.trim()) {
    // Redirect to the dynamic page with the user's input
    router.push(`/Explorer/${searchValue}`)
  }
}

export const handleCourse = (
  event: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  courseName: any,
  router: any,
) => {
  event.preventDefault()
  if (courseName.trim()) {
    // Redirect to the dynamic page with the user's input
    router.push(`/coursepage/${courseName}`)
  }
}
