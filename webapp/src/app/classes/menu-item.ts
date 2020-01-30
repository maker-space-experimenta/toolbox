export class MenuItem {
    id: string;
    
    active: boolean;
    text: string;
    order: number;
    path: string;

    children: MenuItem[];


    constructor() {

    }
}
