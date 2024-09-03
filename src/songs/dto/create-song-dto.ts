import { Type } from "class-transformer";
import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";
import { ArtistDTO } from "./artist-dto";

export class CreateSongDTO {
    @IsString()
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    @IsArray()
    @Type(() => ArtistDTO)
    readonly artists: ArtistDTO[];

    @IsNotEmpty()
    @IsDateString()
    readonly releasedDate: Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration: Date;
}

