module.exports = {
  SiteTitle: 'Hisham',
  Sitelogo: '#',
  SiteLogoText: 'Hisham',
  SiteAuthor: 'Hisham Thavarakkadan',
  SiteDescription: 'Front End Developer',
  defaultDescription: 'Software engineer!', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction:ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {
    twitter: 'https://twitter.com/tkhisham7',
    github: 'https://github.com/hishamtk',
    linkedin: 'https://www.linkedin.com/in/hisham-tk-48a918a1/',
  },
  SiteAddress: {
    city: 'Calicut',
    region: 'Kerala',
    country: 'India',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'tkhisham007@gmail.com',
    phone: 'phone number',
  },
  SiteCopyright: '2021',
};
