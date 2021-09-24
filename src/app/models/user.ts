export default class User {
    html_url: string; //user link
    created_at: string;
    updated_at: string;
    full_name: string; //repo name
    language: string;
    description: string;
    git_url: string; //repo link
    homepage: string | null;
    owner: Owner = new Owner();
}
export class Owner {
    login: string; //username   owner.login
    avatar_url: string;
}