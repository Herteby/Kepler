/*
	default values for new models and data documents
*/
Kepler.schemas = {

	place: {
		name: '',	       //place title
		type: '',	       //place tipology
		active: 0,	       //place visible in map
		rank: 0,		   //sum of all users's favorites
		loc: [],		   //coordinates lat,lng
		desc: '',		   //place description
		warn: '',          //place warnings and dangers

		checkins: [],	   //users inside place	
		hist: [],		   //recents checkins
		event: [],		   //calendar events
		source: {},		   //descrive source of data

//TODO move into geo property
		ele: 0,		       //elevation
		esp: 0,		       //aspect
		near: '',	       //near locality
		com: '',		   //municipality
		prov: '',		   //province
		reg: '',		   //district
		naz: '',		   //country		
		//shadow:'',
	},
	
	user: {
		name: '',		   //display name	
		username: '',	   //username used in urls
		emails: [], 
		avatar: '',
		status: '',        //status mood message, shown in profile
		gender: '',
		city: '',
		lang: 'it',
		likeplaces: [],	   //(TODO rename in types) tipologia climber i18n.places					
		loc: null,		   //current gps position
		loclast: null,	   //lat gps position
		checkin: null,	   //id Place where I am
		online: 0,		   //stato di visibilita rispetto ai miei friends
		onlinelast: null,  //last online status datetime
		mob: 0,			   //if my device is mobile
		favorites: [],	   //id place preferiti		
		friends: [],	   //ids users friends
		usersPending: [],  //ids users that I send request
		usersReceive: [],  //ids users that I receive request
		usersBlocked: [],  //ids users that I blocked
		hist: [],		   //last places visited
		event: [],		   //places in calendar
		source: {},		   //source of registration by single signon

//TODO mode to plugins		
		notif: [],		   //notifications, messaggi non letti, eventi in places preferite, nuovi friends			
		isAdmin: 0,		   //if user is an admin
		settings: {
			map: {
				layer: null,
				center: null  //last center of map
			}
		}
	}
};
