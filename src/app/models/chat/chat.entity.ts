import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { VariableChatEntity } from '../variable-chat/variables-chat.entity';

@Entity('chats')
export class ChatEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, type: 'varchar', length: 50 })
  phone: string;

  @Column({ nullable: false, type: 'text' })
  message: boolean;

  @Column({ nullable: false })
  isAttendant: boolean;

  @Column({ nullable: false, default: true })
  waitingResponse: boolean;

  @Column({ nullable: true, type: 'varchar', length: 50 })
  triggerExecuted: string;

  @OneToMany(() => VariableChatEntity, (variable) => variable.chat)
  variables: VariableChatEntity[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
