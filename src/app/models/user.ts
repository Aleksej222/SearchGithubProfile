export abstract class BaseResponse{
    html_url: string; //user link
    created_at: string;
    updated_at: string;
    name: string; //repo name
    language: string;
    description: string | null;
    git_url: string; //repo link
    homepage: string | null;
    login: string;
    avatar_url: string;
}


export default class User extends BaseResponse{
    
    repositories:Repository[];

}
export class Repository extends BaseResponse{

}


// export class Owner {
//     login: string; //username   owner.login
//     avatar_url: string;
// }