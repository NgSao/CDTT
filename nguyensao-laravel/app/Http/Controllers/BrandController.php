<?php

namespace App\Http\Controllers;
use App\Models\Brand;
use App\Http\Requests\StoreBrandRequest;
use App\Http\Requests\UpdateBrandRequest;

use Illuminate\Http\Request;

class BrandController extends Controller
{
    public function index()
    {
        $brands = Brand::where('status','!=',0)
            ->orderBy('sort_order','ASC')
            ->select("id","name","slug","thumbnail","description","status","updated_at")
            ->get();
            if($brands->isEmpty()) {
                $result = [
                    'status' => false,
                    'message' => 'Không tìm thấy dữ liệu',
                    'brands' => null
                ];
            }
            else {
                $result =[
                    'status'=>true,
                    'message'=>'Tải dữ liệu thành công',
                    'brands'=>$brands
                ];
            }
        return response()->json($result);
    }

    public function trash()
    {
        $brands = Brand::where('status','=',0)
            ->orderBy('sort_order','ASC')
            ->select("id","name","slug","thumbnail","description","status")
            ->get();
            if($brands->isEmpty()) {
                $result = [
                    'status' => false,
                    'message' => 'Không tìm thấy dữ liệu',
                    'brands' => null
                ];
            }
            else {
                $result =[
                    'status'=>true,
                    'message'=>'Tải dữ liệu thành công',
                    'brands'=>$brands
                ];
            }
        return response()->json($result);
    }

    public function show($id)
    {
        $brand = Brand::find($id);
        if($brand==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'brand'=>$brand
            ];
        }
        else
        {
            $result =[
                'status'=>true,
                'message'=>'Tải dữ liệu thành công',
                'brand'=>$brand
            ];
        }
        return response()->json($result);
    }


    public function store(StoreBrandRequest $request)
    {
        $brand = new Brand();
        $brand->name =  $request->name;
        $brand->slug =  $request->slug;
        $brand->description =  $request->description;
        if($request->thumbnail)
        {
           $exten=$request->thumbnail->extension();
           $thumbnailName = date('YmdHis').".".$exten;
           $request->thumbnail->move(public_path('images/brand'), $thumbnailName);
           $brand->thumbnail =  $thumbnailName;
        }
        $brand->sort_order =  $request->sort_order ?? 1;
        $brand->status =  1;
        $brand->created_by =  1;
        $brand->created_at =  date('Y-m-d H:i:s');
        $brand->updated_at = $request->updated_at ?? null;
        if($brand->save())
        {
            $result =[
                'status'=>true,
                'message'=>'Thêm thành công',
                'brand'=>$brand
            ];
        }
        else
        {
            $result =[
                'status'=>false,
                'message'=>'Thêm thất bại',
                'brand'=>null
            ];
        }

        return response()->json($result);
    }


    public function update(UpdateBrandRequest $request, $id)
    {
        $brand = Brand::find($id);
        if($brand==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'brand'=>$brand
            ];
        }
        else
        {
            $brand->name =  $request->name;
            $brand->slug =  $request->slug;
            $brand->description =  $request->description;
            if($request->thumbnail)
            {
                $imagePath = public_path('images/brand/'. $brand->thumbnail);
                if ($brand->thumbnail && file_exists(public_path('images/brand/'. $brand->thumbnail))) {
                    unlink($imagePath);
                }

                $exten=$request->thumbnail->extension();
                $thumbnailName = date('YmdHis').".".$exten;
                $request->thumbnail->move(public_path('images/brand'), $thumbnailName);
                $brand->thumbnail =  $thumbnailName;
            }
            $brand->sort_order =  1;
            $brand->status =  1;
            $brand->updated_by =  1;
            $brand->updated_at =  date('Y-m-d H:i:s');
            $brand->save();
            $result =[
                'status'=>true,
                'message'=>'Sửa thành công',
                'brand'=>$brand
            ];
        }
        return response()->json($result);
    }


    public function status($id)
    {
        $brand = Brand::find($id);
        if($brand==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thầy thông tin',
                'brand'=>null
            ];
            return response()->json($result);
        }
        $brand->status = ($brand->status==1)?2:1;
        $brand->updated_by =  1;
        $brand->updated_at =  date('Y-m-d H:i:s');
        if($brand->save())
        {
            $result =[
                'status'=>true,
                'message'=>'Thay đổi thành công',
                'brand'=>$brand
            ];
        }
        else
        {
            $result =[
                'status'=>false,
                'message'=>'Không thể thay đổi',
                'brand'=>null
            ];
        }
        return response()->json($result);
    }


    public function delete($id)
    {
        $brand = Brand::find($id);
        if($brand==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'brand'=>$brand
            ];
        } elseif($brand->status==0) {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'brand'=>null
            ];
        }
        else
        {
            $brand->status = 0;
            $brand->updated_by =  1;
            $brand->updated_at =  date('Y-m-d H:i:s');
            $brand->save();
            $result =[
                'status'=>true,
                'message'=>'Dữ liệu đưa vào thùng rác thành công',
                'brand'=>$brand
            ];
        }
        return response()->json($result);
    }


    public function restore($id)
    {
        $brand = Brand::find($id);
        if($brand==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'brand'=>$brand
            ];
        } elseif($brand->status!=0) {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'brand'=>null
            ];
        }
        else
        {
            $brand->status = 2;
            $brand->updated_by =  1;
            $brand->updated_at =  date('Y-m-d H:i:s');
            $brand->save();
            $result =[
                'status'=>true,
                'message'=>'Khôi phục dữ liệu thành công',
                'brand'=>$brand
            ];
        }
        return response()->json($result);
    }



    public function destroy($id)
    {
        $brand = Brand::find($id);
        if($brand==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'brand'=>$brand
            ];
        }
        else
        {
            $imagePath = public_path('images/brand/'. $brand->thumbnail);
            if ($brand->thumbnail && file_exists(public_path('images/brand/'. $brand->thumbnail))) {
                unlink($imagePath);
            }
            $brand->delete();
            $result =[
                'status'=>true,
                'message'=>'Xóa dữ liệu thành công',
                'brand'=>$brand
            ];
        }
        return response()->json($result);
    }




}