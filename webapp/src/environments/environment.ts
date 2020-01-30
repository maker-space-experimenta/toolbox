// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCfflLx3_Bews6BH-GaTgvuUX19bMGNJ6I",
    authDomain: "toolbox-2644a.firebaseapp.com",
    databaseURL: "https://toolbox-2644a.firebaseio.com",
    projectId: "toolbox-2644a",
    storageBucket: "toolbox-2644a.appspot.com",
    messagingSenderId: "118707216949",
    appId: "1:118707216949:web:29a66da21503ffee"
  },

  menu: {
    default: [
      {
        text: "Dashboard",
        path: "/dashboard",

        children: [
          {
            text: "Overview",
            path: "/dashboard",
          }
        ]
      },
      {
        text: "Devices and Material",
        path: "/devices",

        children: [
          {
            text: "Devices",
            path: "/devices",
          },
          {
            text: "Device Licenses",
            path: "/devices/licenses",
          },
          {
            text: "New Device",
            path: "/devices/new",
          },
          {
            text: "Material",
            path: "/devices/new",
          },
        ]
      },
      {
        text: "CMS",
        path: "/index/cms",
        children: [
          {
            text: "Pages",
            path: "/index/cms/pages",
          },
          {
            text: "Blog",
            path: "/index/cms/pages",
          },
          {
            text: "Announcements",
            path: "/index/cms/pages",
          },
          {
            text: "Themes",
            path: "/index/cms/themes",
          },
        ]
      },
      {
        text: "Workshops",
        path: "/index/workshops",
        children: [
          {
            text: "Kalendar",
            path: "/index/cms/pages",
          },
          {
            text: "Registrations",
            path: "/index/cms/themes",
          },
        ]
      },
      {

        text: "Space Control",
        path: "/spacecontrol",
        children: [
          {
            text: "Presence",
            path: "/presence",
          },
          {
            text: "Statistics",
            path: "/spacecontrol/statistics",
          },
          {
            text: "Light",
            path: "/spacecontrol/light",
          },
          {
            text: "Music",
            path: "/spacecontrol/music",
          }
        ]
      },
      {
        text: "Users",
        path: "/index/admin",
        children: [
          {
            text: "Me",
            path: "/index/cms/pages",
          },
          {
            text: "All",
            path: "/index/cms/pages",
          },
          {
            text: "Presence",
            path: "/index/cms/pages",
          },
        ]
      },
      {
        text: "Projects",
        path: "/projects",
        children: [
          {
            text: "All Projects",
            order: 1,
            path: "/projects",
            children: []
          },
          {
            text: "my todos",
            order: 1,
            path: "/projects/all/todos",
            children: []
          },
        ]
      },
      {
        id: "shifts",
        text: "Shifts",
        order: 1,
        path: "",
        children: [
          {
            text: "Timetables",
            order: 1,
            path: "/index/cms/pages",
            children: []
          },
          {
            text: "Events",
            order: 1,
            path: "/index/cms/pages",
            children: []
          },
        ]
      },
      {
        id: "admin",
        text: "Administration",
        order: 1,
        path: "/index/admin",
        children: [
          {
            text: "General",
            order: 1,
            path: "/index/cms/pages",
            children: []
          },
          {
            text: "Users",
            order: 1,
            path: "/index/cms/pages",
            children: []
          },
          {
            text: "Usergroups",
            order: 1,
            path: "/index/cms/pages",
            children: []
          },
        ]
      }
    ]
  },

  apis: {
    presence: {
      url: "https://api.toolbox.hmnd.local/presence"
    },
    devices: {
      url: "http://api.toolbox.hmnd.local/devices"
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
