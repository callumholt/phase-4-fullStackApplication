class DogsController < ApplicationController
    def indee
        dogs = Dog.all
        render json: dogs
      end
      
end
