export interface IUserApp {
    id?: string;
    appId: string; // Same as IApp.id
    userId: string; // Unique user id
    groupName: string; // Label group this app comes under ("Work", "Home", ...)
    url?: string; // URL of the app (IApp.url)
    iconUrl?: string; // URL of the app icon
    displayName: string;
}