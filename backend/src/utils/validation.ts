import { BadRequestException } from '@nestjs/common';

export const isFile = (file: Express.Multer.File) => {
  if (!file) {
    throw new BadRequestException('Image should not be empty.');
  }
};
