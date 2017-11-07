
K.Plugin({
	name: 'notif',
	templates: {
		navSidebar: 'navSidebar_notif',
		panelProfile: 'panelProfile_notif'
	},
	schemas: {
		user: {
			notifs: []
		}
	},
	filters: {
		currentUser: {
			fields: {
				notifs: 1
			}
		}
	}
});
