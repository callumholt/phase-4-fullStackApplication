class DogsController < ApplicationController
    # before_action :authenticate 
    
    def index
        dogs = Dog.all
        render json: dogs
    end

    def create 
        @dogs = Dog.create(dog_params)
        puts "the dog_params that got created is: #{dog_params}"


        if @dogs.save
            # puts "the user object that got created is: #{@user}"
            # puts "the USERNAME for the user that got created is: #{@user.username}"
            # puts "the BIO for the user that got created is: #{@user.bio}"
            # puts "the NAME for the user that got created is: #{@user.name}"

            render json: @dogs

            puts "this is the @user after the render: #{@dogs.attributes}"

            # render json: @user.attributes

        else
            puts "Validation Errors: #{@dogs.errors.full_messages}"

            render :new, status: :unprocessable_entity
        end
    end

    private
    def dog_params
        params.permit(:id_of_owner, :name_of_dog, :age_of_dog, :breed_of_dog, :bio_of_dog, :location_postCode, :dates_require_dogSitting)
    end

    def authenticate
        render json: {error: "NOT LOGGED IN"} unless session[:user_id]
               
    end
end