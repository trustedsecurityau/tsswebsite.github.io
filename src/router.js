import Vue from 'vue'
import Router from 'vue-router'
import VueScrollTo from 'vue-scrollto'

/**
 * Pages
 */
const Home = () => import('./views/Home')
const About = () => import('./views/About')
const Labs = () => import('./views/Labs')
const CVEs = () => import('./views/labs/CVEs')
const Services = () => import('./views/Services')
const SecurityTesting = () => import('./views/services/SecurityTesting')
const MSO = () => import('./views/services/MSO')
const Consulting = () => import('./views/services/Consulting')
const Careers = () => import('./views/Careers')
const Contact = () => import('./views/Contact')
const PrivacyPolicy = () => import('./views/PrivacyPolicy')
const FourOhFour = () => import('./views/404')

Vue.use(Router)

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Home'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                title: 'About'
            }
        },
        {
            path: '/labs',
            name: 'labs',
            component: Labs,
            meta: {
                title: 'Labs'
            }
        },
        {
            path: '/labs/cves',
            name: 'cves',
            component: CVEs,
            meta: {
                title: 'CVEs'
            }
        },
        {
            path: '/services',
            name: 'services',
            component: Services,
            meta: {
                title: 'Services'
            }
        },
        {
            path: '/services/security-assurance',
            name: 'consulting',
            component: Consulting,
            meta: {
                title: 'Security Assurance'
            }
        },
        {
            path: '/services/security-testing',
            name: 'securitytesting',
            component: SecurityTesting,
            meta: {
                title: 'Security Testing'
            }
        },
        {
            path: '/services/managed-security',
            name: 'mso',
            component: MSO,
            meta: {
                title: 'Managed Security'
            }
        },
        {
            path: '/careers',
            name: 'careers',
            component: Careers,
            meta: {
                title: 'Careers'
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
            meta: {
                title: 'Contact'
            }
        },
	    {
		    path: '/privacy',
		    name: 'privacy',
		    component: PrivacyPolicy,
		    meta: {
			    title: 'Privacy Policy'
		    }
	    },

	    /**
         * Old Legacy Routes
         * TODO - To be removed approx 30/06/2019
         *
         * /about.html
	     * /careers.html
	     * /services.html#strategic
	     * /services.html#tactical
	     * /services.html#operational
	     * /services.html
	     * /contact.html
	     */
        { path: '/about\.html',  redirect: { name: 'about' } },
	    { path: '/careers\.html',  redirect: { name: 'careers' } },
	    { path: '/services\.html',  redirect: to =>
		    {
			    /* Matches the hash of the little diagram thing on the old website */
			    if(to.hash === '#strategic') { return { name: 'consulting', hash: '' } }
			    if(to.hash === '#tactical') { return { name: 'securitytesting', hash: '' } }
			    if(to.hash === '#operational') { return { name: 'mso', hash: '' } }
			    return { name: 'services' }
		    }
	    },
	    { path: '/contact\.html',  redirect: { name: 'contact' } },

	    /**
         * Four Oh Four
	     */

	    {
		    path: '/*',
		    name: '404',
		    component: FourOhFour,
		    meta: {
			    title: 'FourOhFour'
		    }
	    }
    ],
	scrollBehavior: (to, from, savedPosition) => {
		if (savedPosition) {
			return savedPosition
			// return {x: 0, y: 0}
		} else {
			// VueScrollTo.scrollTo('body', 300);
			// return {x: 0, y: 0}
		}
	}
})

router.beforeEach((to, from, next) => {
    document.title = to.meta.title + ' | Trusted Security Services'
    setTimeout(() => {
	    if (!to.hash) {
		    window.scroll({
			    top: 0,
		    });
	    }
    }, 500)
    next()
})

router.afterEach((to, from) => {
    setTimeout(() => {
        if (to.hash) {
	        window.scroll({ top: 0 });
            VueScrollTo.scrollTo(to.hash, 1);
        }
    }, 500);
})



export default router
