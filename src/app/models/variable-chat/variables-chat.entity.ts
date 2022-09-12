import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { ChatEntity } from '../chat/chat.entity';

@Entity('variables_chat')
export class VariableChatEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  key: string;

  @Column({ nullable: false, type: 'varchar' })
  value: string;

  @ManyToOne(() => ChatEntity, (chat) => chat.variables)
  chat: ChatEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
