class User < ApplicationRecord
    # has_many :dogs

    has_secure_password
    validates :username, presence: true
    validates :password, presence: true
    validates :password_confirmation, presence: true
    validates :password, confirmation: true
    
    
  end
  