Rails.application.routes.draw do
  # get '/posts', to: 'posts#index'
  resources :posts do
    collection do
      post :confirm
    end
  end
  resources :users, only: [:new, :create, :show]
  resources :sessions, only: [:new, :create, :destroy]
  resources :favorites, only: [:create, :destroy]
end
