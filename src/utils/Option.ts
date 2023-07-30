import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class Option {
  @ApiPropertyOptional({
    // example: '[{ "key": "name", "value": 1, "option": "LIKE" }]',
    default: '{}',
  })
  @IsOptional()
  @Transform(({ value }) => JSON.parse(value))
  where: any;

  @ApiPropertyOptional({
    default: '[]',
  })
  @IsOptional()
  @Transform(({ value }) => JSON.parse(value))
  // @IsArray()
  relations: string;
}
