import { LocalStorageService } from "./LocalStorage.service"

const Get = () => {
    return LocalStorageService.get('users');
}

const Create = (user) => {
   const users = Get();

   user = {
    id: users.length + 1,
    ...user,
   }

   LocalStorageService.set('users', [...users, user]);   
}

const Show = (id) => {
    return Get().find(user => user.id === id);
}


const ShowByEmail = (email) => {
    return Get().find(user => user.email === email);
}

const Delete = (id) => {
    LocalStorageService.set('users', Get().filter(user => user.id !== id));
   
}
const Update = (id, newUser) => {
    const users = Get();
    users[users.find(user => user.id === id).indexOf] = newUser;
    LocalStorageService.set('users', users);
}

export const UserService = {
    Get,
    Create,
    Show,
    ShowByEmail,
    Delete,
    Update
}