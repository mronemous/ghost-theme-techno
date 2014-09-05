var theme =
{
    logo: '[YOUR LOGO]',
    author: {
        showGithub: true,
        github: 'https://github.com/[YOUR ACCOUNT]',
        showTwitter: true,
        twitter: 'https://twitter.com/[YOUR ACCOUNT]',
        showLinkedIn: true,
        linkedin: 'http://linkedin.com/in/[YOUR ACCOUNT]',
        showEmail: true,
        email: 'mailto:[YOUR EMAIL]'
    },
    disqus: {
        shortname: '[YOUR DISQUS SHORTNAME]'
    },
    google: {
        analytics: {
            account: '[YOUR GA ACCOUNT]',
            domain: '[YOUR GA DOMAIN]'
        }
    },

    menu: [
        { route: '', text: 'Home'},
        { route: '/about', text: 'About'},
        { route: '/projects', text: 'Projects'}
    ]
}

// Export config
module.exports = theme;