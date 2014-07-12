var theme =
{
    logo: 'https://s.gravatar.com/avatar/17657df5ab0c43f75d240ad96f8e8195?s=80',
    author: {
        github: 'https://github.com/mronemous',
        twitter: 'https://twitter.com/mronemous',
        linkedin: 'http://linkedin.com/in/mronemous',
        email: 'mailto:matt.ronemous@gmail.com'
    },
    disqus: {
        shortname: 'matt-ronemous'
    },
    google: {
        analytics: {
            account: 'UA-51320632-1',
            domain: 'ronemous.com'
        }
    },

    menu: [
        { route: '', text: 'Home'},
        { route: '/about', text: 'About'},
        { route: '/projects', text: 'Projects'}
    ]




    /*

     <li><a href="{{@blog.url}}">Home</a>
     </li>
     <li><a href="{{@blog.url}}/about">About</a>
     </li>
     <li><a href="{{@blog.url}}/projects">Projects</a>
     </li>
   */
}

// Export config
module.exports = theme;