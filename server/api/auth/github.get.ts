export default eventHandler(async (event) => {
  // @ts-ignore
  const config = useRuntimeConfig(event)
  const { code } = getQuery(event)

  if (!code) {
    // Redirect to GitHub Oauth page
    const redirectUrl = getRequestURL(event).href
    return sendRedirect(event, `https://github.com/login/oauth/authorize?client_id=${config.github.clientId}&redirect_uri=${redirectUrl}`)
  }

  const response: any = await $fetch(
    'https://github.com/login/oauth/access_token',
    {
      method: 'POST',
      body: {
        client_id: config.github.clientId,
        client_secret: config.github.clientSecret,
        code
      }
    }
  )
  if (response.error) {
    return sendRedirect(event, '/')
  }

  const ghUser: any = await $fetch('https://api.github.com/user', {
    headers: {
      'User-Agent': `Github-OAuth-${config.github.clientId}`,
      Authorization: `token ${response.access_token}`
    }
  })

  await setUserSession(event, {
    user: ghUser
  })

  return sendRedirect(event, '/')
})
