class PostsController < ApplicationController
  before_action :set_post, only: [ :show, :update, :destroy]

  # GET users/1/posts
  def index
    @user = User.find(params[:user_id])
    @posts = @user.posts

    render json: @posts
  end

  # GET /feed
  def feed
    @posts = Post.all
    render json: @posts
  end

  # GET /users/1/posts/1
  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  # POST /users/1/posts
  def create
    @user = User.find(params[:user_id])
    @post = Post.new(post_params)
    @user.posts.push(@post)
    if @post.save
      render json: @post, status: :created
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1/posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1/posts/1
  def destroy
    @post.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:content, :user_id)
    end
end
