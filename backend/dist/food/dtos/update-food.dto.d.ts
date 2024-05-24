/// <reference types="node" />
export declare class UpdateFoodDto {
    name: String;
    cost: Number;
    image: {
        name: string;
        data: Buffer;
        contentType: string;
    };
}
