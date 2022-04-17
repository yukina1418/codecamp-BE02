import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CartService } from './cart.service';
import { UpdateCartInput } from './dto/updateCart.input';
import { Cart } from './modules/entities/cart.entity';

@Resolver()
export class CartResolver {
  constructor(private readonly CartService: CartService) {}

  @Mutation(() => Cart)
  async updateCart(@Args('updateCartInput') updateCartInput: UpdateCartInput) {
    return await this.CartService.update({ updateCartInput });
  }
}
