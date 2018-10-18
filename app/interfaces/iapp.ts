export interface IApp {
    id?: string;
    displayType: string; // Display name of the type of app
    type: string; // Internal name of the type of app
    url: string; // Homepage of the app
    iconUrl: string; // URL for the icon
    family?: string; // Optional family to which this belongs (office365|gsuite...)
    staticUrl: boolean; // If false user must provide a URL
    name: string;
}