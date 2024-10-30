<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\ProductImage;
use App\Models\ProductStore;
use App\Models\ProductSale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ProductController extends Controller
{
    public function index()
{

     $products = Product::join('productstore', 'product.id', '=', 'productstore.product_id')
     ->join('productimage', 'product.id', '=', 'productimage.product_id')
     ->join('productsale', 'product.id', '=', 'productsale.product_id')

     ->select(
         'product.id',
         'product.name',
         'product.slug',
         'product.category_id',
         'product.brand_id',
         'product.content',
         'product.pricebuy',
         'product.description',
         'product.created_at',
         'product.created_by',
         'product.updated_at',
         'product.updated_by',
         'product.status',
         'productimage.thumbnail',
         'productstore.qty',
         'productstore.priceroot',
         'productsale.pricesale',
     )
     ->where('product.status', '!=', 0 )
     ->where('productstore.status', '!=', 2 )
     ->get();
     foreach ($products as $product) {
        $product->thumbnail = url('images/products/' . $product->thumbnail);
    }


 return response()->json([
     'status' => true,
     'message' => 'Tải dữ liệu sản phẩm thành công',
     'products' => $products
 ]);
}





    public function store(Request $request)
    {

        $product = new Product();
        $product->name = $request->name;
        $product->slug = $request->slug;
        $product->category_id = $request->category_id;
        $product->brand_id = $request->brand_id;
        $product->content = $request->content;
        $product->description = $request->description;
        $product->pricebuy = $request->pricebuy;
        $product->created_by = 1;
        $product->status = $request->status ?? 1;
        $product->save();

        $productStore = new ProductStore();
        $productStore->product_id = $product->id;
        $productStore->priceroot = $request->priceroot;
        $productStore->qty = $request->qty;
        $productStore->dateimport = now();
        $productStore->created_by = 1;
        $productStore->status = $request->status ?? 1;
        $productStore->save();

        $productSale = new ProductSale();
        $productSale->product_id = $product->id;
        $productSale->pricesale = 0;

        $productSale->created_by = 1;
        $productSale->status = $request->status ?? 1;
        $productSale->save();

        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $imageName = date('YmdHis') . '_' . uniqid() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images/products'), $imageName);
            $productImage = new ProductImage();
            $productImage->product_id = $product->id;
            $productImage->thumbnail = $imageName;
            $productImage->save();
        }

        return response()->json([
            'status' => true,
            'message' => 'Thêm sản phẩm và dữ liệu kho thành công',
            'product' => $product,
            'product_store' => $productStore,
            'product_image' => $productImage ?? null
        ]);
    }

    public function getProductNew()
    {

    $dateLimit = now()->subDays(15);

    $products = Product::join('productstore', 'product.id', '=', 'productstore.product_id')
        ->join('productimage', 'product.id', '=', 'productimage.product_id')
        ->orderBy('product.created_at', 'DESC')
        ->select(
            'product.id',
            'product.name',
            'product.category_id',
            'product.pricebuy',
            'product.description',
            'productimage.thumbnail',
            'productstore.qty'
        )
        ->where('product.status', '!=', 0)
        ->where('product.created_at', '>=', $dateLimit) // Điều kiện để lấy sản phẩm mới bán
        ->get();
        foreach ($products as $product) {
            $product->thumbnail = url('images/products/' . $product->thumbnail);
        }


    return response()->json([
        'status' => true,
        'message' => 'Tải dữ liệu sản phẩm thành công',
        'products' => $products
    ]);
    }


    public function indexFrontend()
    {

        $products = Product::join('productstore', 'product.id', '=', 'productstore.product_id')
            ->join('productimage', 'product.id', '=', 'productimage.product_id')
            ->orderBy('product.created_at', 'DESC')
            ->select(
                'product.id',
                'product.name',
                'product.category_id',
                'product.pricebuy',
                'product.description',
                'productimage.thumbnail',
                'productstore.qty'
            )
            ->where('product.status', '!=', 0)
            ->get();

        return response()->json([
            'status' => true,
            'message' => 'Tải dữ liệu sản phẩm thành công',
            'products' => $products
        ]);
    }

    public function update(Request $request, $id)
    {

        $product = Product::find($id);

        if ($product == null) {
            return response()->json([
                'status' => false,
                'message' => 'Không tìm thấy sản phẩm',
                'product' => null
            ]);
        }


        $product->name = $request->name ?? $product->name;
        $product->slug = $request->slug ?? $product->slug;
        $product->category_id = $request->category_id ?? $product->category_id;
        $product->brand_id = $request->brand_id ?? $product->brand_id;
        $product->content = $request->content ?? $product->content;
        $product->description = $request->description ?? $product->description;
        $product->pricebuy = $request->pricebuy ?? $product->pricebuy;

        $product->updated_by = 1;
        $product->updated_at = now();
        $product->status = $request->status ?? $product->status;
        $product->save();

        // // Cập nhật thông tin productstore
        // $productStore = ProductStore::where('product_id', $product->id)->first();
        // if ($productStore) {
        //     $productStore->priceroot = $request->priceroot ?? $productStore->priceroot;
        //     $productStore->qty = $request->qty ?? $productStore->qty;
        //     $productStore->updated_at = now();
        //     $productStore->save();
        // }

        // Cập nhật ảnh nếu có
        if ($request->hasFile('image')) {
            // Xóa ảnh cũ (nếu cần)
            if ($product->thumbnail && file_exists(public_path('images/products/' . $product->thumbnail))) {
                unlink(public_path('images/products/' . $product->thumbnail));
            }

            $image = $request->file('image');
            $imageName = date('YmdHis') . '_' . uniqid() . '.' . $image->getClientOriginalExtension();
            $image->move(public_path('images/products'), $imageName);

            $productImage = ProductImage::where('product_id', $product->id)->first();
            if ($productImage) {
                $productImage->thumbnail = $imageName;
                $productImage->save();
            } else {
                $productImage = new ProductImage();
                $productImage->product_id = $product->id;
                $productImage->thumbnail = $imageName;
                $productImage->save();
            }
        }

        return response()->json([
            'status' => true,
            'message' => 'Cập nhật sản phẩm thành công',
            'product' => $product,
            // 'product_store' => $productStore,
            // 'product_image' => $productImage ?? null
        ]);
    }



public function show($id)
{
    // Sử dụng join để kết hợp dữ liệu từ bảng product, productstore và productimage
    $product = Product::join('productstore', 'product.id', '=', 'productstore.product_id')
        ->join('productimage', 'product.id', '=', 'productimage.product_id') // kết nối với bảng productimage có id bằng product_id
        ->select(
            'product.id',
            'product.name',
            'product.slug',
            'product.category_id',
            'product.brand_id',
            'product.content',
            'product.pricebuy',
            'product.description',
            'product.created_at',
            'product.created_by',
            'product.updated_at',
            'product.updated_by',
            'product.status',
            'productimage.thumbnail', // Lấy thumbnail từ bảng productimage
            'productstore.qty',
            'productstore.priceroot'
        )
        ->where('product.id', $id)
        ->first();

    // Kiểm tra xem sản phẩm có tồn tại không
    if (!$product) {
        return response()->json([
            'status' => false,
            'message' => 'Không tìm thấy sản phẩm'
        ]);
    }

    // Thêm URL đầy đủ cho thumbnail
    $product->thumbnail = url('images/products/' . $product->thumbnail);

    return response()->json([
        'status' => true,
        'message' => 'Tải dữ liệu sản phẩm thành công',
        'product' => $product
    ]);
}
public function updatePStatus(Request $request, $id)
{
    $product = Product::find($id);


    if ($product == null) {
        return response()->json([
            'status' => false,
            'message' => 'Không tìm thấy dữ liệu',
            'product' => null
        ]);
    }

    if (!in_array($request->status, [0, 1])) {
        return response()->json([
            'status' => false,
            'message' => 'Status chỉ nhận giá trị 1 hoặc 0',
            'product' => null
        ]);
    }

    $product->status = $request->status;


    if ($product->save()) {
        return response()->json([
            'status' => true,
            'message' => 'Sửa thành công',
            'product' => $product
        ]);
    } else {
        return response()->json([
            'status' => false,
            'message' => 'Sửa thất bại',
            'product' => null
        ]);
    }
}

}