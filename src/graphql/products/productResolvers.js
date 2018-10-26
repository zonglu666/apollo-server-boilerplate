import ProductModel from './ProductModel';
import BrandModel from './BrandModel';
import type { ProductType, ProductConnection } from './ProductTypes';

const resolvers: Object = {
  products: async ProductConnection => {
    const products = ProductModel.find().populate('brand');
    products.forEach(function(n){
        switch(n.status) {
            case 1: n.status = "正常"; break;
            case 2: n.status = "不正常"; break;
            default: n.status = "未知"; break;
        }
    })
    return {
      products,
    };
  },
};

export default resolvers;
