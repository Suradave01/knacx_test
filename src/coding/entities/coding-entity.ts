import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('coding')
export class Coding {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  result: string;

  @Column()
  correct: number;

  @Column()
  position: number;

  @Column()
  time: number;
}
