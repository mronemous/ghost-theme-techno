var theme =
{
    logo: '[YOUR LOGO]',
    author: {
        github: 'https://github.com/[YOUR ACCOUNT]',
        twitter: 'https://twitter.com/[YOUR ACCOUNT]',
        linkedin: 'http://linkedin.com/in/[YOUR ACCOUNT]',
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