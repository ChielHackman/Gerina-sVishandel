class RecensiesController < ApplicationController
  def index
    @recensies = Recensie.all
  end

  def show
    @recensie = Recensie.find(params[:id])
  end

  def new
    @recensie = Recensie.new
  end

  def create
    @recensie = Recensie.new(recensie_params)

    if @recensie.save
      redirect_to root_path
    else
      render 'new'
    end
  end

  private
    def recensie_params
      params.require(:recensie).permit(:name, :message)
    end
end
