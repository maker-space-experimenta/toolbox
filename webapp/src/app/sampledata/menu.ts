
export const menu: any = {
    default: [
        {
            i18n_key: "nav_dashboard",
            path: "/dashboard",

            children: [
                {
                    i18n_key: "Overview",
                    path: "/dashboard",
                }
            ]
        },
        {
            i18n_key: "nav_devices_and_material",
            path: "/devices",

            children: [
                {
                    i18n_key: "nav_dam_devices",
                    path: "/devices",
                },
                {
                    i18n_key: "nav_dam_device_licenses",
                    path: "/devices/licenses",
                },
                {
                    i18n_key: "nav_dam_storage",
                    path: "/devices/storage",
                },
            ]
        },
        {
            i18n_key: "nav_cms",
            path: "/index/cms",
            children: [
                {
                    i18n_key: "nav_cms_pages",
                    path: "/index/cms/pages",
                },
                {
                    i18n_key: "nav_cms_blog",
                    path: "/index/cms/pages",
                },
                {
                    i18n_key: "nav_cms_announcements",
                    path: "/index/cms/pages",
                },
                {
                    i18n_key: "nav_cms_themes",
                    path: "/index/cms/themes",
                },
            ]
        },
        {
            i18n_key: "nav_workshops",
            path: "/index/workshops",
            children: [
                {
                    i18n_key: "nav_ws_calendar",
                    path: "/index/cms/pages",
                },
                {
                    i18n_key: "nav_ws_registrations",
                    path: "/index/cms/themes",
                },
            ]
        },
        {

            i18n_key: "nav_space_control",
            path: "/spacecontrol",
            children: [
                {
                    i18n_key: "nav_sc_presence",
                    path: "/presence",
                },
                {
                    i18n_key: "nav_sc_statistics",
                    path: "/spacecontrol/statistics",
                },
                {
                    i18n_key: "nav_sc_light",
                    path: "/spacecontrol/light",
                },
                {
                    i18n_key: "nav_sc_music",
                    path: "/spacecontrol/music",
                }
            ]
        },
        {
            i18n_key: "nav_users",
            path: "/users",
            children: [
                {
                    i18n_key: "nav_users_all",
                    path: "",
                    role: "users_read_all"
                },
                {
                    i18n_key: "nav_users_me",
                    path: "/users/me",
                },
                
            ]
        },
        {
            i18n_key: "nav_projects",
            path: "/projects",
            children: [
                {
                    i18n_key: "nav_projects_all",
                    order: 1,
                    path: "/projects",
                    children: []
                },
                {
                    i18n_key: "nav_projects_todos",
                    order: 1,
                    path: "/projects/all/todos",
                    children: []
                },
            ]
        },
        {
            id: "shifts",
            i18n_key: "nav_shifts",
            order: 1,
            path: "",
            children: [
                {
                    i18n_key: "nav_shifts_timetables",
                    order: 1,
                    path: "/index/cms/pages",
                    children: []
                },
                {
                    i18n_key: "nav_shifts_events",
                    order: 1,
                    path: "/index/cms/pages",
                    children: []
                },
            ]
        },
        {
            id: "admin",
            i18n_key: "nav_admin",
            order: 1,
            path: "/index/admin",
            children: [
                {
                    i18n_key: "nav_admin_general",
                    order: 1,
                    path: "/index/cms/pages",
                    children: []
                },
                {
                    i18n_key: "nav_admin_users",
                    order: 1,
                    path: "/index/cms/pages",
                    children: []
                },
                {
                    i18n_key: "nav_admin_usergroups",
                    order: 1,
                    path: "/index/cms/pages",
                    children: []
                },
            ]
        }
    ]
};