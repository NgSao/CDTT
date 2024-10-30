<?php

namespace App\Http\Controllers;
use App\Models\Category;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categorys = Category::where('status','!=',0)
            ->orderBy('sort_order','ASC')
            ->select("id","name","slug","thumbnail","description","parent_id","status","updated_at")
            ->get();
            if($categorys->isEmpty()) {
                $result = [
                    'status' => false,
                    'message' => 'Không tìm thấy dữ liệu',
                    'categorys' => null
                ];
            }
            else {
                $result =[
                    'status'=>true,
                    'message'=>'Tải dữ liệu thành công',
                    'categorys'=>$categorys
                ];
            }
        return response()->json($result);
    }

    public function trash()
    {
        $categorys = Category::where('status','=',0)
            ->orderBy('sort_order','ASC')
            ->select("id","name","slug","thumbnail","description","parent_id","status")
            ->get();
            if($categorys->isEmpty()) {
                $result = [
                    'status' => false,
                    'message' => 'Không tìm thấy dữ liệu',
                    'categorys' => null
                ];
            }
            else {
                $result =[
                    'status'=>true,
                    'message'=>'Tải dữ liệu thành công',
                    'categorys'=>$categorys
                ];
            }
        return response()->json($result);
    }

    public function show($id)
    {
        $category = Category::find($id);
        if($category==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'category'=>$category
            ];
        }
        else
        {
            $result =[
                'status'=>true,
                'message'=>'Tải dữ liệu thành công',
                'category'=>$category
            ];
        }
        return response()->json($result);
    }


    public function store(StoreCategoryRequest $request)
    {
        $category = new Category();
        $category->name =  $request->name;
        $category->slug =  $request->slug;
        if($request->thumbnail) {
            $exten=$request->thumbnail->extension();
            $thumbnailName = date('YmdHis').".".$exten;
            $request->thumbnail->move(public_path('images/category'), $thumbnailName);
            $category->thumbnail =  $thumbnailName;
        }
        $category->description =  $request->description;
        $category->sort_order =  $request->sort_order??1;
        $category->parent_id =  $request->parent_id ?? 0;
        $category->status =  1;
        $category->created_by =  1;
        $category->created_at =  date('Y-m-d H:i:s');
        $category->updated_at = $request->updated_at ?? null;

        if($category->save())
        {
            $result =[
                'status'=>true,
                'message'=>'Thêm thành công',
                'category'=>$category
            ];
        }
        else
        {
            $result =[
                'status'=>false,
                'message'=>'Thêm thất bại',
                'category'=>null
            ];
        }

        return response()->json($result);
    }


    public function update(UpdateCategoryRequest $request, $id)
    {
        $category = Category::find($id);
        if($category==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'category'=>$category
            ];
        }
        else
        {
            $category->name =  $request->name;
            $category->slug =  $request->slug;
            if($request->thumbnail)
            {
                $imagePath = public_path('images/category/'. $category->thumbnail);
                if ($category->thumbnail && file_exists(public_path('images/category/'. $category->thumbnail))) {
                    unlink($imagePath);
                }

                $exten=$request->thumbnail->extension();
                $thumbnailName = date('YmdHis').".".$exten;
                $request->thumbnail->move(public_path('images/category'), $thumbnailName);
                $category->thumbnail =  $thumbnailName;
            }
            $category->description =  $request->description;
            $category->sort_order =  $request->sort_order??1;
            $category->parent_id =  $request->parent_id??0;
            $category->status =  $request->status ??1;
            $category->updated_by =  1;
            $category->updated_at = date('Y-m-d H:i:s');
            $category->save();
            $result =[
                'status'=>true,
                'message'=>'Sửa thành công',
                'category'=>$category
            ];
        }
        return response()->json($result);
    }


    public function status($id)
    {
        $category = Category::find($id);
        if($category==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thầy thông tin',
                'category'=>null
            ];
            return response()->json($result);
        }
        $category->status = ($category->status==1)?2:1;
        $category->updated_by =  1;
        $category->updated_at =  date('Y-m-d H:i:s');
        if($category->save())
        {
            $result =[
                'status'=>true,
                'message'=>'Thay đổi thành công',
                'category'=>$category
            ];
        }
        else
        {
            $result =[
                'status'=>false,
                'message'=>'Không thể thay đổi',
                'category'=>null
            ];
        }
        return response()->json($result);
    }


    public function delete($id)
    {
        $category = Category::find($id);
        if($category==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'category'=>$category
            ];
        } elseif($category->status==0) {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'category'=>null
            ];
        }
        else
        {
            $category->status = 0;
            $category->updated_by =  1;
            $category->updated_at =  date('Y-m-d H:i:s');
            $category->save();
            $result =[
                'status'=>true,
                'message'=>'Dữ liệu đưa vào thùng rác thành công',
                'category'=>$category
            ];
        }
        return response()->json($result);
    }


    public function restore($id)
    {
        $category = Category::find($id);
        if($category==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'category'=>$category
            ];
        } elseif($category->status!=0) {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'category'=>null
            ];
        }
        else
        {
            $category->status = 2;
            $category->updated_by =  1;
            $category->updated_at =  date('Y-m-d H:i:s');
            $category->save();
            $result =[
                'status'=>true,
                'message'=>'Khôi phục dữ liệu thành công',
                'category'=>$category
            ];
        }
        return response()->json($result);
    }



    public function destroy($id)
    {
        $category = Category::find($id);
        if($category==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'category'=>$category
            ];
        }
        else
        {
            $imagePath = public_path('images/category/'. $category->thumbnail);
            if ($category->thumbnail && file_exists(public_path('images/category/'. $brand->thumbnail))) {
                unlink($imagePath);
            }
            $category->delete();
            $result =[
                'status'=>true,
                'message'=>'Xóa dữ liệu thành công',
                'category'=>$category
            ];
        }
        return response()->json($result);
    }




}
