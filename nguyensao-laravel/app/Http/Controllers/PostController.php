<?php

namespace App\Http\Controllers;
use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $posts = Post::where('post.status','!=',0)
        ->leftJoin('topic', 'topic.id', '=', 'post.topic_id')
        ->select("post.id","post.title","post.slug","post.content","post.thumbnail","post.description","post.status","post.updated_at","topic.name as topic_name")
        ->get();
            if ($posts->isEmpty()) {
                $result = [
                    'status' => false,
                    'message' => 'Không tìm thấy dữ liệu',
                    'posts' => null
                ];
            }
            else {
                $result =[
                    'status'=>true,
                    'message'=>'Tải dữ liệu thành công',
                    'posts'=>$posts
                ];
               }
        return response()->json($result);
    }

    public function trash()
    {
        $posts = Post::where('status','=',0)
        ->select("id","title","slug","content","thumbnail","description","status")
        ->get();
        if ($posts->isEmpty()) {
            $result = [
                'status' => false,
                'message' => 'Không tìm thấy dữ liệu',
                'posts' => null
            ];
        }
       else {
        $result =[
            'status'=>true,
            'message'=>'Tải dữ liệu thành công',
            'posts'=>$posts
        ];
       }
        return response()->json($result);
    }

    public function show($id)
    {
        $post = post::find($id);
        if($post==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'post'=>$post
            ];
        }
        else
        {
            $result =[
                'status'=>true,
                'message'=>'Tải dữ liệu thành công',
                'post'=>$post
            ];
        }
        return response()->json($result);
    }


    public function store(StorePostRequest $request)
    {
        $post = new Post();
        $post->title = $request->title;
        $post->slug =  $request->slug;
        $post->content =  $request->content;
        $post->topic_id =  $request->topic_id;
        if($request->thumbnail)
        {
           $exten=$request->thumbnail->extension();
           $thumbnailName = date('YmdHis').".".$exten;
           $request->thumbnail->move(public_path('images/post'), $thumbnailName);
           $post->thumbnail =  $thumbnailName;
        }
        $post->description =  $request->description;
        $post->type =  $request->type ?? 'post';
        $post->status =  1;
        $post->created_by =  1;
        $post->created_at = date('Y-m-d H:i:s');
        $post->updated_at = $post->updated_at ?? null;

        if($post->save())
        {
            $result =[
                'status'=>true,
                'message'=>'Thêm thành công',
                'post'=>$post
            ];
        }
        else
        {
            $result =[
                'status'=>false,
                'message'=>'Thêm thất bại',
                'post'=>null
            ];
        }

        return response()->json($result);
    }


    public function update(UpdatepostRequest $request, $id)
    {
        $post = post::find($id);
        if($post==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'post'=>$post
            ];
        }
        else
        {
            $post->title = $request->title;
            $post->slug =  $request->slug;
            $post->content =  $request->content;
            $post->topic_id =  $request->topic_id;
            if($request->thumbnail) {
                if ($post->thumbnail && file_exists(public_path('images/post/' . $post->thumbnail))) {
                    unlink(public_path('images/post/' . $post->thumbnail));
                }

                $exten = $request->thumbnail->extension();
                if (in_array($exten, $list_exten)) {
                    $thumbnailName = date('YmdHis') . "." . $exten;
                    $request->thumbnail->move(public_path('images/post'), $thumbnailName);
                    $post->thumbnail = $thumbnailName;
                }
            }
            $post->description =  $request->description;
            $post->type =  $request->type;
            $post->status =  1;
            $post->updated_by =  1;
            $post->updated_at = date('Y-m-d H:i:s');
            $post->save();
            $result =[
                'status'=>true,
                'message'=>'Sửa thành công',
                'post'=>$post
            ];
        }
        return response()->json($result);
    }


    public function status($id)
    {
        $post = Post::find($id);
        if($post==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy thông tin',
                'post'=>null
            ];
            return response()->json($result);
        }
        $post->status = ($post->status==1)?2:1;
        $post->updated_by =  1;
        $post->updated_at =  date('Y-m-d H:i:s');
        if($post->save())
        {
            $result =[
                'status'=>true,
                'message'=>'Thay đổi thành công',
                'post'=>$post
            ];
        }
        else
        {
            $result =[
                'status'=>false,
                'message'=>'Không thể thay đổi',
                'post'=>null
            ];
        }
        return response()->json($result);
    }


    public function delete($id)
    {
        $post = post::find($id);
        if($post==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'post'=>$post
            ];
        } elseif($post->status==0) {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'post'=>null
            ];
        }
        else
        {
            $post->status = 0;
            $post->updated_by =  1;
            $post->updated_at =  date('Y-m-d H:i:s');
            $post->save();
            $result =[
                'status'=>true,
                'message'=>'Dữ liệu đưa vào thùng rác thành công',
                'post'=>$post
            ];
        }
        return response()->json($result);
    }


    public function restore($id)
    {
        $post = post::find($id);
        if($post==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'post'=>$post
            ];
        } elseif($post->status!=0) {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'post'=>null
            ];
        }
        else
        {
            $post->status = 2;
            $post->updated_by =  1;
            $post->updated_at =  date('Y-m-d H:i:s');
            $post->save();
            $result =[
                'status'=>true,
                'message'=>'Khôi phục dữ liệu thành công',
                'post'=>$post
            ];
        }
        return response()->json($result);
    }



    public function destroy($id)
    {
        $post = post::find($id);
        if($post==null)
        {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'post'=>$post
            ];
        } elseif($post->status!=1) {
            $result =[
                'status'=>false,
                'message'=>'Không tìm thấy dữ liệu',
                'post'=>null
            ];
        }
        else
        {
            $imagePath = public_path('images/post/'. $brand->thumbnail);
            if ($post->thumbnail && file_exists(public_path('images/post/'. $brand->thumbnail))) {
                unlink($imagePath);
            }
            $post->delete();
            $result =[
                'status'=>true,
                'message'=>'Xóa dữ liệu thành công',
                'post'=>$post
            ];
        }
        return response()->json($result);
    }




}