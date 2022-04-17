import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ItemService } from '../item/item.service';
import { Item } from '../item/models/entities/item.entity';
import { Cart } from './modules/entities/cart.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(Cart)
    private readonly CartRepository: Repository<Cart>,

    @InjectRepository(Item)
    private readonly itemRepository: Repository<Item>,
  ) {}

  async create({ user_id }) {
    return await this.CartRepository.save({
      user: { user_id },
    });
  }

  async read({ currentUser }) {
    return await this.CartRepository.createQueryBuilder()
      .where({ user: currentUser.user_id })
      .getOne();
  }

  async update({ updateCartInput }) {
    const { items, ...date } = updateCartInput;

    const PlusCart = await this.itemRepository.findOne({
      where: { id: items[0] },
    });

    const user_cart = await this.CartRepository.createQueryBuilder()
      .where({ user: date.user_id })
      .getOne();

    if (!user_cart) {
      // 장바구니가 없을 경우 생성
      const arr = [];
      arr.push(PlusCart);
      console.log('추가');
      const createCart = await this.CartRepository.save({
        user: { user_id: date.user_id },
        name: '10',
        items: arr,
      });

      return createCart;
    } else {
      // 장바구니가 있을 경우 수량 증가
      // 같은 물품이 들어온다면 금액을 원래 금액 * 2를 하고
      // 수량이라는 데이터를 상품쪽에 달아놓고, +1을 해준다
      const Read_User_Data = await this.CartRepository.findOne({
        where: { id: user_cart.id },
        relations: ['items', 'user'],
      });

      //   Read_User_Data.items.map((ele, idx) =>
      //     ele.id.includes(PlusCart.id) ? console.log('aaaa') : console.log('bbb'),
      //   );

      //   Read_User_Data.items.forEach((ele) => ele.id.includes(PlusCart.id) ? ele.amount += ele.amount);
      // console.log(Read_User_Data.items[0].id);

      Read_User_Data.items.push(PlusCart);

      console.log('업데이트');
      const Update_Cart = await this.CartRepository.save({
        ...Read_User_Data,
      });

      return Update_Cart;
    }
  }
}

// const aaaa = await this.CartRepository.findOne({
//     where: { id: 'aee79774-e474-433c-bee1-18d5636e0b83' },
//     relations: ['items'],
//   });
//   console.log(aaaa);
// const aaa = await this.CartRepository.createQueryBuilder()
//   .update()
//   .set({ items: 1 + items })
//   .where({ id: 'b95ed5a8-8cfd-4c81-ab69-0c61ef9c6445' })
//   .execute();

// await this.CartRepository.save({

//     items
// })

// const qqqq = await this.CartRepository.update(
//   { id: user_cart.id },
//   { items: arr},
// );
// const newuser = await this.CartRepository.save({
//   ...date,
//   items,
// });

// console.log(newuser);
// console.log(newuser);
// const aaa = await this.CartRepository.findOne({
//   where: { id: newuser.id },
//   relations: ['items', 'user'],
// });
// console.log(aaa);
// const items = await this.CartRepository.update(
//   { id: user_cart.id },
//   { items: items.push(item_id) },
// );
//    console.log(aaa);
// const user = await this.CartRepository.findOne({
//   where: { id: user_cart.id },
//   relations: ['items', 'user'],
// });
// user.items.push(item_id);
//  console.log(user);
// console.log(user);
// return user;
// console.log(user_cart.id);
//    return user_cart;
//console.log(user_cart);

// const aaa = await this.CartRepository.find({
//   relations: ['user', 'items'],
// });

// const qeqe = await this.CartRepository.save({
//   user: { user_id: date.user_id },
//   name: '10',
//   items: items + arr,
// });

// const user = await this.CartRepository.findOne({
//   where: { name: '10' },
//   relations: ['items', 'user'],
// });
