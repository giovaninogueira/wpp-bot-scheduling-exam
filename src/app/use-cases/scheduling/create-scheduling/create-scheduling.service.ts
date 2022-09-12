import { Inject, Injectable } from '@nestjs/common';
import { CustomerEntity } from 'src/app/models/customer/customer.entity';
import { Repository } from 'typeorm';
import { CreateSchedulingDTO } from './create-scheduling.dto';

@Injectable()
export class CreateSchedulingService {
  constructor(
    @Inject('CUSTOMER_REPOSITORY')
    private customerRepository: Repository<CustomerEntity>,
  ) {}

  /**
   * Create customer
   *
   * @param body
   * @returns
   */
  async create(body: CreateSchedulingDTO) {
    const customer = this.createCustomerOrFind(body);
    // criar agendamento
    return customer;
  }

  /**
   * Find Customer or create when customer not exist
   *
   * @param body
   * @returns
   */
  private async createCustomerOrFind(
    body: CreateSchedulingDTO,
  ): Promise<CustomerEntity> {
    const customer = await this.customerRepository.findOneBy({
      phone: body.phone,
    });

    if (!customer) {
      return this.customerRepository.save(body);
    }

    return customer;
  }
}
