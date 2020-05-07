export class CartItem {
    public id: number;
    public name: string;
    public quantity: number;
    public price: number;
    public image: string;
    public total: number;
  //   public ingredients: Ingredient[];
  
    constructor(id: number, name: string, quantity: number, price: number, image: string) {
    // constructor(public name: string, public quantity: number, public price: number) {
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
      this.image = image;
      this.total = this.quantity * this.price;
    }
  }