Rails.application.routes.draw do
  root to: 'users#index'
  post '/auth/login', to: 'authentication#login'
  get '/users/verify', to: 'users#verify'
  get '/feed', to: 'posts#feed'
  
  resources :comments
  resources :users do
    resources :posts
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
