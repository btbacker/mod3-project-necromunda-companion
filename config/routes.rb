Rails.application.routes.draw do
  resources :skills, only: [:index]
  resources :fighters, only: [:new, :create, :edit, :update, :destroy]
  resources :equipment, only: [:index]
  resources :squads, only: [:index, :new, :create, :edit, :update, :destroy]
  resources :users, only: [:index, :new, :create, :edit, :update, :destroy]

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
