Rails.application.routes.draw do
  
  resources :dogs, only: [:index]
  resources :users, only: [:index]
  resources :users, only: [:show]

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!

  post '/signup', to: 'users#create'

  get '/me', to: 'users#show'

  post '/login', to: 'sessions#create'

  delete '/logout', to: 'sessions#destroy'

  get '/dogs', to: 'dogs#index'

  post '/dogs', to: 'dogs#create'

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }



end
