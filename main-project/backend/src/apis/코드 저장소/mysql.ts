// 관계가 있는 데이터 불러올 때 사용하는 방법
// const qqq = await this.productRepository
//   .createQueryBuilder()
//   .where({ info: dataInfo })
//   .getOne();
/////////////////////////////////////////////////////////////////
// 관계가 있는 데이터 불러오고 값을 변경하는 방법
// const qqq = await this.productRepository
//   .createQueryBuilder()
//   .update(Product)
//   .set({
//     name: updateInfo.name,
//     price: updateInfo.price - updateInfo.price * updateInfo.sale,
//   })
//   .where({ info: dataInfo })
//   .execute();

// 이제 연관되는 관계를 모조리 불러오는 것만 할 수 있으면 된다

// where 사용 방법
// .where( { name: "Timber" })
// .orWhere({ lastName: "Saw" });
// .andWhere({ lastName: "Saw" });
