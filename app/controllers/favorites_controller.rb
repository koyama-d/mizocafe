class FavoritesController < ApplicationController
  def create
    favorite = current_user.favorites.create(post_id: params[:post_id])
    redirect_to posts_url, notice: "#{favorite.post.user.name}さんの投稿にいいねしました"
  end
  def destroy
    favorite = current_user.favorites.find_by(id: params[:id]).destroy
    redirect_to posts_url, notice:"#{favorite.post.user.name}さんの投稿のいいねを解除しました。"
  end
end
