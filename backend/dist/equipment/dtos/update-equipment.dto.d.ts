/// <reference types="node" />
export declare class UpdateEquipmentDto {
    name: String;
    cost: Number;
    image: {
        name: string;
        data: Buffer;
        contentType: string;
    };
}
