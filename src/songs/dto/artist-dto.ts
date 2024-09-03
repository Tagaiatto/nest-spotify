import { IsNotEmpty, IsString } from "class-validator";

export class ArtistDTO {
    @IsString()
    @IsNotEmpty()
    readonly name: string;
}