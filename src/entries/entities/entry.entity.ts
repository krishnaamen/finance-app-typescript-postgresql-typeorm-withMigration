import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from '../../categories/entities/category.entity';

@Entity()
export class Entry {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  amount: number;
  @Column()
  currency: string;
  @Column()
  name: string;
  @Column()
  description: string;
  @ManyToOne(() => Category, (category) => category.entries, {
    eager: true,
  })
  category: Category;
}
