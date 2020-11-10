// Модуль с объявлением и экспортом интерфейса, класса и функции

export interface Device {
    model: string;
}

export class Phone implements Device {
    model: string;
    constructor(model: string) {
        this.model = model;
    }
}

export function call(phone: Phone): void {
    console.log("Make a call by", phone.model);
}

// экспорт определения
/*
interface Device {
    model: string;
}

class Phone implements Device {
    model: string;
    constructor(model: string) {
        this.model = model;
    }
}

function call(phone: Phone): void {
    console.log("Make a call by", phone.model);
}

export { Device, Phone, call as callPhone };
*/
