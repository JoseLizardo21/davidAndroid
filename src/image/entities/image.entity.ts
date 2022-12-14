import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ImageInterface } from './image.interface';

@Entity()
export class Image implements ImageInterface {
  @PrimaryGeneratedColumn({ type: 'int', unsigned: true })
  image_id: number;

  @Column({ type: 'varchar', length: '300' })
  image: string;

  @Column({ type: 'varchar', length: '200' })
  image_description: string;

  @Column({ type: 'varchar', length: '50' })
  image_titulo: string;
}
