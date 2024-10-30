<?php

namespace App\Http\Controllers;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\ProductStore;
use App\Models\ProductSale;
use App\Models\OrderDetail;
use App\Models\Order;

use App\Models\Category;
use App\Models\Brand;
use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

use Illuminate\Http\Request;


class ProductController extends Controller
{
    public function index()
    {
        $products = Product::where('product.status', '!=', 0)
            ->join('category', 'category.id', '=', 'category_id')
            ->join('brand', 'brand.id', '=', 'brand_id')
            ->leftJoin('productimage', 'productimage.product_id', '=', 'product.id')
            ->leftJoin('productstore', 'productstore.product_id', '=', 'product.id')
            ->select(
                "product.id", "product.name", "product.slug", "product.content", "product.description","product.pricebuy","product.updated_at", "product.status",
                "category.name as categoryname", "brand.name as brandname",
                "productimage.thumbnail as image",
                "productstore.qty as qty"
            )
            ->get();

        if ($products->isEmpty()) {
            $result = [
                'status' => false,
                'message' => 'Không tìm thấy dữ liệu',
                'products' => null
            ];
        } else {
            $result = [
                'status' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ];
        }
        return response()->json($result);
    }



    public function trash()
    {
        $products = Product::where('product.status', '=', 0)
            ->join('category', 'category.id', '=', 'category_id')
            ->join('brand', 'brand.id', '=', 'brand_id')
            ->leftJoin('productimage', 'productimage.product_id', '=', 'product.id')
            ->leftJoin('productstore', 'productstore.product_id', '=', 'product.id')
            ->select(
                "product.id", "product.name", "product.slug", "product.content", "product.description", "product.updated_at", "product.status",
                "category.name as categoryname", "brand.name as brandname",
                "productimage.thumbnail as image",
                "productstore.qty as qty"
            )
            ->orderBy('product.updated_at','ASC')
            ->get();

        if ($products->isEmpty()) {
            $result = [
                'status' => false,
                'message' => 'Không tìm thấy dữ liệu',
                'products' => null
            ];
        } else {
            $result = [
                'status' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ];
        }
        return response()->json($result);
    }

    public function show($id)
    {
        $product = Product::where('product.id', '=', $id)
        ->join('category', 'category.id', '=', 'category_id')
        ->join('brand', 'brand.id', '=', 'brand_id')
        ->leftJoin('productstore', 'productstore.product_id', '=', 'product.id')
        ->select(
            "product.id", "product.name", "product.slug", "product.content", "product.description","product.pricebuy", "product.updated_at", "product.status",
            "category.name as categoryname", "brand.name as brandname",
            "productstore.qty as qty"
        )
        ->with('productImages')
        ->get();

    if ($product->isEmpty()) {
        $result = [
            'status' => false,
            'message' => 'Không tìm thấy dữ liệu',
            'product' => null
        ];
    } else {
        $result = [
            'status' => true,
            'message' => 'Tải dữ liệu thành công',
            'product' => $product
        ];
    }
    return response()->json($result);
    }



    public function store(StoreProductRequest $request)
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
        $product->created_at = date('Y-m-d H:i:s');
        $product->status = $request->status ?? 1;
        $product->save();

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $imageName = date('YmdHis') . '_' . uniqid() . '.' . $image->getClientOriginalExtension();
                $image->move(public_path('images/product'), $imageName);
                $productImage = new ProductImage();
                $productImage->product_id = $product->id;
                $productImage->thumbnail = $imageName;
                $productImage->save();
            }
        }
        return response()->json([
            'status' => true,
            'message' => 'Thêm sản phẩm và dữ liệu kho thành công',
            'product' => $product,
            'product_images' =>  $product->productImages
        ]);
    }





    public function update(UpdateProductRequest $request, $id)
    {
        $product = Product::find($id);
        if($product == null)
        {
            $result = [
                'status' => false,
                'message' => 'Không tìm thấy dữ liệu',
                'product' => $product
            ];
        }
        else
        {
            $product->name = $request->name;
            $product->link = $request->link;

            if ($request->image) {
                if ($product->image && file_exists(public_path('images/product/'. $product->image))) {
                    unlink(public_path('images/product/' . $product->image));
                }
                $exten=$request->image->extension();
                $imageName = date('YmdHis').'.'.$exten ;
                $request->image->move(public_path('images/product'), $imageName);
                $product->image = $imageName;
            }

            $product->description = $request->description;
            $product->position = $request->position ?? 'slideshow';
            $product->sort_order = $request->sort_order??1;
            $product->updated_by = 1;
            $product->updated_at = date('Y-m-d H:i:s');
            $product->status = $request->status ??1;

            $product->save();
            $result = [
                'status' => true,
                'message' => 'Sửa thành công',
                'product' => $product
            ];
        }

        return response()->json($result);
    }



    public function status($id)
    {
        $product = Product::find($id);
        if($product==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thầy thông tin',
                'product'=>null
            ];
            return response()->json($result);
        }
        $product->status = ($product->status==1)?2:1;
        $product->updated_by =  1;
        $product->updated_at =  date('Y-m-d H:i:s');
        if($product->save())
        {
            $result =[
                'status'=>true,
                'message'=>'Thay đổi thành công',
                'product'=>$product
            ];
        }
        else
        {
            $result =[
                'status'=>false,
                'message'=>'Không thể thay đổi',
                'product'=>null
            ];
        }
        return response()->json($result);
    }


    public function delete($id)
    {
        $product = Product::find($id);
        if($product==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'product'=>$product
            ];
        } elseif($product->status==0) {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'product'=>null
            ];
        }
        else
        {
            $product->status = 0;
            $product->updated_by =  1;
            $product->updated_at =  date('Y-m-d H:i:s');
            $product->save();
            $result =[
                'status'=>true,
                'message'=>'Dữ liệu đưa vào thùng rác thành công',
                'product'=>$product
            ];
        }
        return response()->json($result);
    }


    public function restore($id)
    {
        $product = Product::find($id);
        if($product==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'product'=>$product
            ];
        } elseif($product->status!=0) {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'product'=>null
            ];
        }
        else
        {
            $product->status = 2;
            $product->updated_by =  1;
            $product->updated_at =  date('Y-m-d H:i:s');
            $product->save();
            $result =[
                'status'=>true,
                'message'=>'Khôi phục dữ liệu thành công',
                'product'=>$product
            ];
        }
        return response()->json($result);
    }


    public function destroy($id)
    {
        $product = Product::find($id);
        if($product==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'product'=>$product
            ];
        }
        else
        {
            $imagePath = public_path('images/product/' . $product->image);
            if (file_exists($imagePath) && !empty($product->image)) {
                unlink($imagePath);
            }
            $product->delete();
            $result =[
                'status'=>true,
                'message'=>'Xóa dữ liệu thành công',
                'product'=>$product
            ];
        }
        return response()->json($result);
    }


    // Người dùng
    public function product_new($limit)
    {
        $subproductstore=ProductStore::select('product_id',DB::raw('SUM(qty) as qty'))
        ->groupBy('product_id');
        $products = Product::where('product.status', '=', 1)
        ->joinSub($subproductstore,'productstore',function($join){
            $join->on('product.id','=','productstore.product_id');
        })
        ->leftJoin('productsale',function($json){
            $today=Carbon::now()->format('Y-m-d H:i:s');
            $json->on('product.id','=','productsale.product_id')
            ->where([
                ['productsale.datebegin','<=',$today],
                ['productsale.dateend','>=',$today],
                ['productsale.status','=',1]
            ]);
        })
            ->with('productImages')
            ->orderBy('product.created_at','DESC')
            ->select("product.id","product.name","product.pricebuy","product.slug","productsale.pricesale" )
            ->limit($limit)
            ->get();

            $result = [
                'status' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ];
        return response()->json($result);
    }


    public function product_sale($limit)
    {
        $subproductstore=ProductStore::select('product_id',DB::raw('SUM(qty) as qty'))
        ->groupBy('product_id');
        $products = Product::where('product.status', '=', 1)
        ->joinSub($subproductstore,'productstore',function($join){
            $join->on('product.id','=','productstore.product_id');
        })
        ->join('productsale',function($json){
            $today=Carbon::now()->format('Y-m-d H:i:s');
            $json->on('product.id','=','productsale.product_id')
            ->where([
                ['productsale.datebegin','<=',$today],
                ['productsale.dateend','>=',$today],
                ['productsale.status','=',1]
            ]);
        })
            ->with('productImages')
            ->orderBy('productsale.pricesale','DESC')
            ->select("product.id","product.name","product.pricebuy","product.slug","productsale.pricesale","productsale.datebegin","productsale.dateend" )
            ->limit($limit)
            ->get();

            $result = [
                'status' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ];
        return response()->json($result);
    }


    public function product_bestseller($limit)
    {
        $subproductstore=ProductStore::select('product_id',DB::raw('SUM(qty) as qty'))
        ->groupBy('product_id');
        $suborderdetail=OrderDetail::select('product_id',DB::raw('SUM(qty) as qty'))
        ->groupBy('product_id');
        $products = Product::where('product.status', '=', 1)
        ->joinSub($subproductstore,'productstore',function($join){
            $join->on('product.id','=','productstore.product_id');
        })
        ->joinSub($suborderdetail,'orderdetail',function($join){
            $join->on('product.id','=','orderdetail.product_id');
        })
        ->leftJoin('productsale',function($json){
            $today=Carbon::now()->format('Y-m-d H:i:s');
            $json->on('product.id','=','productsale.product_id')
            ->where([
                ['productsale.datebegin','<=',$today],
                ['productsale.dateend','>=',$today],
                ['productsale.status','=',1]
            ]);
        })
            ->with('productImages')
            ->orderBy('orderdetail.qty','DESC')
            ->select("product.id","product.name","product.pricebuy","product.slug","productsale.pricesale","orderdetail.qty" )
            ->limit($limit)
            ->get();

            $result = [
                'status' => true,
                'message' => 'Tải dữ liệu thành công',
                'products' => $products
            ];
        return response()->json($result);
    }



    public function product_category($categoryId,$limit)
    {
        $products = Product::where('product.status', '!=', 0)
        ->where('category_id', $categoryId)
        ->leftJoin('productimage', 'productimage.product_id', '=', 'product.id')
        ->leftJoin('productstore', 'productstore.product_id', '=', 'product.id')
        ->select(
            "product.id", "product.name","product.category_id","product.brand_id", "product.slug", "product.content", "product.description", "product.pricebuy", "product.updated_at", "product.status",
            "productimage.thumbnail as image",
            "productstore.qty as qty"
        )
        ->orderBy('product.id', 'desc')
        ->limit($limit)
        ->get();

    if ($products->isEmpty()) {
        $result = [
            'status' => false,
            'message' => 'Không tìm thấy sản phẩm trong danh mục này',
            'products' => null
        ];
    } else {
        $result = [
            'status' => true,
            'message' => 'Tải sản phẩm thành công',
            'products' => $products
        ];
    }

    return response()->json($result);
    }


    public function products($limit)
    {
        $products = Product::where('product.status', '!=', 0)
        ->leftJoin('productimage', 'productimage.product_id', '=', 'product.id')
        ->leftJoin('productstore', 'productstore.product_id', '=', 'product.id')
        ->select(
            "product.id", "product.name","product.category_id","product.brand_id", "product.slug", "product.content", "product.description", "product.pricebuy", "product.updated_at", "product.status",
            "productimage.thumbnail as image",
            "productstore.qty as qty"
        )
        ->orderBy('product.id', 'desc')
        ->limit($limit)
        ->get();

    if ($products->isEmpty()) {
        $result = [
            'status' => false,
            'message' => 'Không tìm thấy sản phẩm trong danh mục này',
            'products' => null
        ];
    } else {
        $result = [
            'status' => true,
            'message' => 'Tải sản phẩm thành công',
            'products' => $products
        ];
    }

    return response()->json($result);
    }


// Lọc

function getListCategoryId($category_id) {
    $list=[];
    array_push($list,$category_id);
    $list_cat1=Category::where([['status','=','1'],['parent_id','=',$category_id]])->get();
    if(count($list_cat1)>0) {
        foreach ($list_cat1 as $row_cat1) {
            array_push($list,$row_cat1->id);
            $list_cat2=Category::where([['status','=','1'],['parent_id','=',$row_cat1->id]])->get();
            if(count($list_cat2)>0) {
                foreach ($list_cat2 as $row_cat2) {
                    array_push($list,$row_cat2->id);
                }
            }
        }
    }
    return $list;
}


public function products_all($category_id=null,$brand_id=null,$price_min=0,$price_max=99999999999)
{
    $list_categoryid=[];
    $where_arg=[
        ['product.status', '=', 1],
    ];
    if($brand_id!=null){
        array_push($where_arg,['product.brand_id','=',$brand_id]);
    }
    if($category_id!=null){
        $list_categoryid=$this->getListCategoryId($category_id);
    }
    $subproductstore=ProductStore::select('product_id',DB::raw('SUM(qty) as qty'))
    ->groupBy('product_id');
    $products_tmp=Product::where($where_arg)->whereBetween('product.pricebuy',[$price_min,$price_max])
    ->joinSub($subproductstore,'productstore',function($json){
        $json->on('product.id','=','productstore.product_id');
    })
    ->leftJoin('productsale',function($json){
        $today=Carbon::now()->format('Y-m-d H:i:s');
        $json->on('product.id','=','productsale.product_id')
        ->where([
            ['productsale.datebegin','<=',$today],
            ['productsale.dateend','>=',$today],
            ['productsale.status','=',1]
        ]);
    })
        ->with('productImages')
        ->orderBy('product.created_at','DESC')
        ->select("product.id","product.name","product.brand_id","product.category_id","product.pricebuy","product.slug","productsale.pricesale" );
        if(count($list_categoryid) > 0 ) {
            $products_tmp->whereIn('product.category_id',$list_categoryid);
        }
        $products= $products_tmp->get();
        $result = [
            'status' => true,
            'message' => 'Tải dữ liệu thành công',
            'products' => $products
        ];
    return response()->json($result);
}



// Sp liên quan
public function getRelatedProducts(Request $request, $productId)
{
    // Lấy thông tin sản phẩm hiện tại để tìm kiếm sản phẩm liên quan
    $product = Product::find($productId);

    if (!$product) {
        return response()->json([
            'status' => false,
            'message' => 'Sản phẩm không tồn tại',
        ], 404);
    }

    // Lấy danh mục hoặc thương hiệu của sản phẩm hiện tại
    $categoryId = $product->category_id;
    $brandId = $product->brand_id;

    // Lấy danh sách sản phẩm liên quan cùng danh mục hoặc cùng thương hiệu
    $relatedProducts = Product::join('productstore', 'product.id', '=', 'productstore.product_id')
        ->join('productimage', 'product.id', '=', 'productimage.product_id')
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
            'product.status',
            'productimage.thumbnail',
            'productstore.qty',
            'productstore.priceroot'
        )
        ->where('product.id', '!=', $productId) // Loại trừ sản phẩm hiện tại
        ->where(function ($query) use ($categoryId, $brandId) {
            $query->where('product.category_id', $categoryId) // Sản phẩm cùng danh mục
                  ->orWhere('product.brand_id', $brandId);   // Hoặc cùng thương hiệu
        })
        ->where('product.status', '!=', 0) // Sản phẩm có trạng thái không phải là 0
        ->limit(8) // Giới hạn số lượng sản phẩm liên quan (ví dụ 10 sản phẩm)
        ->get();

    // Thêm URL đầy đủ cho thumbnail
    foreach ($relatedProducts as $relatedProduct) {
        $relatedProduct->thumbnail = url('images/product/' . $relatedProduct->thumbnail);
    }

    return response()->json([
        'status' => true,
        'message' => 'Tải dữ liệu sản phẩm liên quan thành công',
        'related_products' => $relatedProducts
    ]);
}


}