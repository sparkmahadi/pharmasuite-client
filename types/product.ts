export interface Category {
    _id: string;
    title: string;
    cat_name: string;
    cat_id: number;
    href: string;
    imgSrc: string;
    imgAlt: string;
  }
  
export interface ShopByCategoryProps {
    categories: Category[];
  }

export interface Image {
    img: string;
}

export interface Inventory {
    discount: number;
    item_variation_option_id: number;
    variation_option_id: number;
    price: number;
    regular_price: number;
    variation_option_name: string;
    qty_in_pcs: number;
    stock_qty: number;
    capacity: string;
    qty: number;
}

export interface MedicineItem {
    _id: string;
    item_desc: string;
    generic_name: string[];
    images: Image[];
    inventory: Inventory[];
    discount: number;
    cat_id: string | null;
    cat_name: string;
    manufacturers: string;
    manufacturers_alias: string;
    sku_type: string;
    item_type: string;
    is_featured: boolean;
    comes_under: string;
    is_prescription_required: number;
    item_name: string;
    item_type_id: number;
    alias: string;
    generic_alias: string;
    is_available: boolean;
    alternative_items: any[];
    related_items: any[];
    available_stock_qty_in_pc: number;
}


export interface ProductProps {
  _id: any;
  generic_name: any[];
  images: any;
  inventory: {
    discount: any;
    item_variation_option_id: number;
    variation_option_id: number;
    price: number;
    regular_price: number;
    variation_option_name: any;
    qty_in_pcs: number;
    stock_qty: number;
    capacity: any;
  }[];
  cat_id: any;
  cat_name: any;
  manufacturers: any;
  manufacturers_alias: any;
  sku_type: any;
  item_type: any;
  is_showcasing: number;
  item_name: any;
  alias: any;
  path: any;
}