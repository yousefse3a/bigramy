const baseUrl = 'http://3.65.32.166/api/v2/storefront/'

export async function getBooks(Page) {
    console.log("first",Page)
    let res =await fetch(`${baseUrl}/products?filter%5Bproduct_type%5D=digital\u0026filter%5Bsub_product_type%5D=book\u0026page=${Page}`).then((res) => {
        return res.json()
    });
    return res;
}