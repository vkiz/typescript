export interface Device {
    name: string;
}

export class Phone implements Device {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

export function call(phone: Phone): void {
    console.log("Make a call by", phone.name);
}
