/// <reference types="node" />
export declare class UpdateVenueDto {
    name: String;
    cost: Number;
    contact: Number;
    place: String;
    image: {
        name: string;
        data: Buffer;
        contentType: string;
    };
}
