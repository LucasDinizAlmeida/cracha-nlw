const linksSocialMedia = {
  github: 'lucasDinizAlmeida',
  youtube: 'channel/UC4r6NLFpCJsvyp',
  facebook: 'rocketseat',
  instagram: 'lucas_diniz_almeida',
  twitter: 'rocketseat'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`
  fetch(url)
    .then(response => response.json())
    .then(a => {
      picture.src = a.avatar_url
      userName.textContent = a.name
      github.href = a.html_url
      userLogin.textContent = a.login
      description.textContent = a.bio
    })
}

getGitHubProfileInfos()
changeSocialMediaLinks()