export class MenuItem {
    id: string;
    
    active: boolean;
    i18n_key: string;
    order: number;
    path: string;

    children: MenuItem[];


    constructor() {

    }
}
