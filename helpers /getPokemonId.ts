const getPokemonId = (url: string) => {
  const splittedUrl = url.split("/")
  const id = splittedUrl[splittedUrl.length - 2]
  return Number(id)
}

export { getPokemonId }
